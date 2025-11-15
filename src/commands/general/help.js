import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import config from "../../../config.json" assert { type: "json" };

export default {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("🌸 Show all commands"),

  async execute(i) {
    const embed = new EmbedBuilder()
      .setTitle("🌸 Genesis Help Menu")
      .setColor(config.sakuraColor)
      .setDescription("Senpai~ here are your commands!")
      .addFields(
        { name: "Owner", value: "/shutdown, /restart, /say, /announce ..." },
        { name: "Admin", value: "/kick, /ban, /timeout, /purge ..." },
        { name: "Mod", value: "/warn, /mute, /unmute ..." },
        { name: "General", value: "/help, /ping, /server, /user" }
      )
      .setTimestamp();

    await i.reply({ embeds: [embed] });
  }
};