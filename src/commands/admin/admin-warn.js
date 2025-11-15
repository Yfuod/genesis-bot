
import { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } from "discord.js";

export default {
  data:new SlashCommandBuilder()
    .setName("admin-warn")
    .setDescription("Warn a user")
    .addUserOption(o=>o.setName("user").setDescription("Target").setRequired(true))
    .addStringOption(o=>o.setName("reason").setDescription("Reason").setRequired(true)),

  async execute(i){
    const adminRoles=["Genesis Administrator","Genesis Captain","Genesis Officer","Genesis Helper"];
    const m=await i.guild.members.fetch(i.user.id);
    if(!m.permissions.has(PermissionFlagsBits.Administrator) ||
       !m.roles.cache.some(r=>adminRoles.includes(r.name)))
      return i.reply({content:"Not admin.",ephemeral:true});

    const u=i.options.getUser("user");
    const reason=i.options.getString("reason");

    const embed=new EmbedBuilder()
      .setTitle("⚠️ User Warned")
      .addFields(
        {name:"User", value:`${u.tag}`},
        {name:"Moderator", value:`${i.user.tag}`},
        {name:"Reason", value:reason}
      )
      .setColor("#ffcc00");

    const log=i.guild.channels.cache.find(c=>c.name==="genesis-admin-logs");
    if(log) log.send({embeds:[embed]});

    i.reply({content:`Warned **${u.tag}**`,embeds:[embed]});
  }
};