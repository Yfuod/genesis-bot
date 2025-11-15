import { SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("🏓 Show bot latency"),

  async execute(i) {
    await i.reply(`Pong~! 🏓 Latency: **${i.client.ws.ping}ms**`);
  }
};