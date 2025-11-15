import { SlashCommandBuilder } from "discord.js";

export default {
  data:new SlashCommandBuilder()
    .setName("daily")
    .setDescription("🎁 Claim your daily reward (placeholder)"),

  async execute(i){
    await i.reply("🎁 Daily reward claimed! (+500 coins) (placeholder)");
  }
};