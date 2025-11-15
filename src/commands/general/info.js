import { SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("🌸 About Genesis Bot"),

  async execute(i) {
    await i.reply("Anime Genesis Studio Bot~ running smoothly! 💮");
  }
};