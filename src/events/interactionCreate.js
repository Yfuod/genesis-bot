export default {
  name: "interactionCreate",

  async execute(interaction, client) {
    // If it's a slash command
    if (interaction.isChatInputCommand()) {
      const cmd = client.commands.get(interaction.commandName);
      if (!cmd) return;
      try {
        await cmd.execute(interaction, client);
      } catch (err) {
        console.error(err);
        interaction.reply({
          content: "❌ Error executing command.",
          ephemeral: true
        });
      }
    }

    // If it's a select menu from owner panel
    if (interaction.isStringSelectMenu()) {
      if (interaction.customId !== "owner-panel-options") return;

      const chosen = interaction.values[0];

      switch (chosen) {
        
        case "roles":
          return interaction.reply({
            content: "🎭 Creating roles...",
            ephemeral: true
          });

        case "channels":
          return interaction.reply({
            content: "📺 Creating channels...",
            ephemeral: true
          });

        case "categories":
          return interaction.reply({
            content: "📂 Creating categories...",
            ephemeral: true
          });

        case "admin_logs":
          return interaction.reply({
            content: "📝 Setting up admin logs...",
            ephemeral: true
          });

        case "staff_roles":
          return interaction.reply({
            content: "👥 Creating staff roles...",
            ephemeral: true
          });

        case "studio_template":
          return interaction.reply({
            content: "🏗️ Setting up Anime Genesis Studio template...",
            ephemeral: true
          });

        case "close":
          return interaction.update({
            content: "❌ Panel closed.",
            embeds: [],
            components: []
          });

        default:
          return interaction.reply({
            content: "⚠️ Unknown option.",
            ephemeral: true
          });
      }
    }
  },
};
