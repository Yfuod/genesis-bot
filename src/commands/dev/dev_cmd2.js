
import { SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("dev_cmd2")
    .setDescription("Placeholder for dev_cmd2 command. Full version will be added."),
  async execute(interaction) {
    await interaction.reply("Executed dev_cmd2 (placeholder).");
  }
};
