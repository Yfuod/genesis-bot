import { SlashCommandBuilder } from "discord.js";
export default {
  data:new SlashCommandBuilder().setName("owner-set-nickname")
    .setDescription("Set nickname for a user")
    .addUserOption(o=>o.setName("user").setDescription("User").setRequired(true))
    .addStringOption(o=>o.setName("nickname").setDescription("Nickname").setRequired(true)),
  async execute(i){
    if(i.user.id!==i.client.config.ownerId) return i.reply({content:"Not owner",ephemeral:true});
    const m=await i.guild.members.fetch(i.options.getUser("user").id);
    await m.setNickname(i.options.getString("nickname"));
    i.reply("✨ Nickname updated.");
  }
};