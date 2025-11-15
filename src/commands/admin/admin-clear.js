
import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js";

export default {
  data:new SlashCommandBuilder()
    .setName("admin-clear")
    .setDescription("Clear messages in the channel")
    .addIntegerOption(o=>o.setName("amount").setDescription("Messages").setRequired(true)),

  async execute(i){
    const adminRoles=["Genesis Administrator","Genesis Captain","Genesis Officer","Genesis Helper"];
    const m=await i.guild.members.fetch(i.user.id);
    if(!m.permissions.has(PermissionFlagsBits.Administrator) ||
       !m.roles.cache.some(r=>adminRoles.includes(r.name)))
      return i.reply({content:"Not admin.",ephemeral:true});

    const amount=i.options.getInteger("amount");
    const msgs=await i.channel.bulkDelete(amount,true).catch(()=>{});
    const log=i.guild.channels.cache.find(c=>c.name==="genesis-admin-logs");
    if(log) log.send(`🧹 **Clear:** ${amount} messages by ${i.user.tag} in #${i.channel.name}`);

    i.reply(`Cleared **${amount}** messages.`);
  }
};