import { SlashCommandBuilder } from "discord.js";
export default {
  data:new SlashCommandBuilder().setName("owner-wipe-warnings")
    .setDescription("Wipes ALL warnings for EVERY user"),
  async execute(i){
    if(i.user.id!==i.client.config.ownerId) return i.reply({content:"Not owner",ephemeral:true});
    for(const key of Object.keys(i.client)){
      if(key.startsWith("warnings_")) delete i.client[key];
    }
    i.reply("🧹 All warnings have been wiped globally.");
  }
};