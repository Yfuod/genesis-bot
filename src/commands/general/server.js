import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import config from "../../../config.json" assert { type: "json" };

export default {
  data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("🏰 Show server information"),

  async execute(i) {
    const g = i.guild;

    const embed = new EmbedBuilder()
      .setTitle(`🏰 ${g.name}`)
      .setColor(config.sakuraColor)
      .addFields(
        { name: "Members", value: `${g.memberCount}` },
        { name: "ID", value: g.id }
      )
      .setThumbnail(g.iconURL())
      .setTimestamp();

    await i.reply({ embeds: [embed] });
  }
};