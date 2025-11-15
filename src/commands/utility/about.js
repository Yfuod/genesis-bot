import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import config from "../../../config.json" assert { type: "json" };
export default {
  data: new SlashCommandBuilder().setName("about").setDescription("About Genesis Bot"),
  async execute(i) {
    const embed = new EmbedBuilder()
      .setTitle("🌸 Genesis Bot")
      .setDescription("Anime Genesis Studio — Sakura Themed Bot")
      .setColor(config.sakuraColor);
    i.reply({ embeds: [embed], ephemeral: true });
  }
};
