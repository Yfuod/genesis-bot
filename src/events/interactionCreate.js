export default {
  name: "interactionCreate",
  async execute(interaction, client) {
    if (interaction.isChatInputCommand()) {
      const cmd = client.commands.get(interaction.commandName);
      if (!cmd)
        return interaction.reply({
          content: "Ara~ Command seems missing…",
          ephemeral: true,
        });

      try {
        await cmd.execute(interaction, client);
      } catch (err) {
        console.error(err);
        return interaction.reply({
          content: "Ara ara~ Something went wrong executing that command.",
          ephemeral: true,
        });
      }
    }

    // For buttons / menus (future panel)
    if (interaction.isButton()) {
      // panel buttons will be added later
    }
  },
};
