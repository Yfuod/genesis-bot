import { SlashCommandBuilder } from "discord.js";

export default {
  data:new SlashCommandBuilder()
    .setName("claim")
    .setDescription("🎉 Claim your reward (placeholder)"),

  async execute(i){
    await i.reply("🎉 You claimed your reward! (placeholder)");
  }
};