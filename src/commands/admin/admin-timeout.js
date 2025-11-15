
import { SlashCommandBuilder, PermissionFlagsBits, Timeouts } from "discord.js";

export default {
  data:new SlashCommandBuilder()
    .setName("admin-timeout")
    .setDescription("Timeout a user")
    .addUserOption(o=>o.setName("user").setDescription("Target").setRequired(true))
    .addIntegerOption(o=>o.setName("minutes").setDescription("Minutes").setRequired(true)),

  async execute(i){
    const adminRoles=["Genesis Administrator","Genesis Captain","Genesis Officer","Genesis Helper"];
    const m=await i.guild.members.fetch(i.user.id);
    if(!m.permissions.has(PermissionFlagsBits.Administrator) ||
       !m.roles.cache.some(r=>adminRoles.includes(r.name)))
      return i.reply({content:"Not admin.",ephemeral:true});

    const u=await i.guild.members.fetch(i.options.getUser("user").id);
    const mins=i.options.getInteger("minutes");
    await u.timeout(mins*60*1000).catch(()=>{});

    const log=i.guild.channels.cache.find(c=>c.name==="genesis-admin-logs");
    if(log) log.send(`⏳ **Timeout:** ${u.user.tag} by ${i.user.tag} for ${mins} minutes`);

    i.reply(`Timed out **${u.user.tag}** for **${mins} mins**`);
  }
};