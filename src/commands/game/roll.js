import { SlashCommandBuilder } from "discord.js";

export default {
  data:new SlashCommandBuilder()
    .setName("roll")
    .setDescription("🎲 Roll for a random item (placeholder)"),

  async execute(i){
    const items=["⭐ Rare", "🔥 Epic", "🌈 Legendary", "💀 Mythical"];
    const result=items[Math.floor(Math.random()*items.length)];
    await i.reply(`🎲 You rolled: **${result}**`);
  }
};