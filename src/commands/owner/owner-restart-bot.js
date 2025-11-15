import { SlashCommandBuilder } from "discord.js";
export default {
  data:new SlashCommandBuilder().setName("owner-restart-bot").setDescription("Restart bot"),
  async execute(i){
    if(i.user.id!==i.client.config.ownerId) return i.reply({content:"Not owner",ephemeral:true});
    await i.reply("🔄 Restarting bot...");
    process.exit(2);
  }
};