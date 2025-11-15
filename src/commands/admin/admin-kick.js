
import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js";

export default {
  data:new SlashCommandBuilder()
    .setName("admin-kick")
    .setDescription("Kick a user from the server")
    .addUserOption(o=>o.setName("user").setDescription("Target").setRequired(true))
    .addStringOption(o=>o.setName("reason").setDescription("Reason").setRequired(false)),

  async execute(i){
    const adminRoles = ["Genesis Administrator","Genesis Captain","Genesis Officer","Genesis Helper"];
    const m = await i.guild.members.fetch(i.user.id);
    if(!m.permissions.has(PermissionFlagsBits.Administrator) || 
       !m.roles.cache.some(r=>adminRoles.includes(r.name)))
      return i.reply({content:"You are not an admin.",ephemeral:true});

    const target=i.options.getUser("user");
    const reason=i.options.getString("reason") || "No reason";

    await i.guild.members.kick(target.id, reason).catch(()=>{});
    const log=i.guild.channels.cache.find(c=>c.name==="genesis-admin-logs");
    if(log) log.send(`🛑 **Kick:** ${target.tag} by ${i.user.tag}
Reason: ${reason}`);

    i.reply(`Kicked **${target.tag}**`);
  }
};