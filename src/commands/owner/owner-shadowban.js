import { SlashCommandBuilder } from "discord.js";
export default {
  data:new SlashCommandBuilder().setName("owner-shadowban")
    .setDescription("Silently ban a user (no announcement)")
    .addUserOption(o=>o.setName("user").setDescription("User").setRequired(true)),
  async execute(i){
    if(i.user.id!==i.client.config.ownerId) return i.reply({content:"Not owner",ephemeral:true});
    const u=i.options.getUser("user");
    await i.guild.members.ban(u.id,{reason:"Shadowban",deleteMessageSeconds:0});
    i.reply({content:`☠️ Shadowbanned **${u.tag}**`,ephemeral:true});
  }
};