import { SlashCommandBuilder } from "discord.js";
export default {
  data:new SlashCommandBuilder().setName("owner-reset-nickname")
    .setDescription("Reset nickname of a user")
    .addUserOption(o=>o.setName("user").setDescription("User").setRequired(true)),
  async execute(i){
    if(i.user.id!==i.client.config.ownerId) return i.reply({content:"Not owner",ephemeral:true});
    const m=await i.guild.members.fetch(i.options.getUser("user").id);
    await m.setNickname(null);
    i.reply("🔄 Nickname reset.");
  }
};