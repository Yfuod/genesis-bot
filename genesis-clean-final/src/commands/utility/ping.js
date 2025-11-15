import { SlashCommandBuilder } from "discord.js";
export default {
  data: new SlashCommandBuilder().setName("ping").setDescription("Ping test"),
  async execute(i) {
    i.reply("🏓 Pong! Sakura OK 🌸");
  }
};
