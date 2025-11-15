import { SlashCommandBuilder } from "discord.js";
export default {
  data:new SlashCommandBuilder().setName("owner-clear-cache").setDescription("Clear bot cache"),
  async execute(i){
    if(i.user.id!==i.client.config.ownerId) return i.reply({content:"Not owner",ephemeral:true});
    for(const key in i.client){
      if(key.startsWith("cache_")) delete i.client[key];
    }
    i.reply("🧼 Cache cleared.");
  }
};