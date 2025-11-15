
import { SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("staff_cmd1")
    .setDescription("Placeholder for staff_cmd1 command. Full version will be added."),
  async execute(interaction) {
    await interaction.reply("Executed staff_cmd1 (placeholder).");
  }
};
