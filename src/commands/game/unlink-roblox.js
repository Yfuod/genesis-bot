import { SlashCommandBuilder } from "discord.js";

export default {
  data:new SlashCommandBuilder()
    .setName("unlink-roblox")
    .setDescription("❌ Unlink Roblox account"),

  async execute(i){
    await i.reply("❌ Roblox unlinked (placeholder)");
  }
};