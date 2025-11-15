import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import config from "../../../config.json" assert { type: "json" };

export default {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("👤 Get info about a user")
    .addUserOption(o => o.setName("member").setDescription("User")),

  async execute(i) {
    const mem = i.options.getUser("member") || i.user;

    const embed = new EmbedBuilder()
      .setTitle(`👤 User: ${mem.username}`)
      .setColor(config.sakuraColor)
      .setThumbnail(mem.displayAvatarURL())
      .addFields(
        { name: "ID", value: mem.id },
        { name: "Bot?", value: mem.bot ? "Yes" : "No" }
      )
      .setTimestamp();

    await i.reply({ embeds: [embed] });
  }
};