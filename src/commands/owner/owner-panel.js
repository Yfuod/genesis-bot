import {
  SlashCommandBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder,
  EmbedBuilder,
} from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("owner-panel")
    .setDescription("Open the Anime Genesis Studio Owner Control Panel"),

  async execute(i) {
    // OWNER CHECK
    const OWNER_ID = "1201992634667638886";

    if (i.user.id !== OWNER_ID) {
      return i.reply({ content: "❌ Only the owner can use this command.", ephemeral: true });
    }

    // MAIN PANEL EMBED
    const embed = new EmbedBuilder()
      .setTitle("🌸 Anime Genesis Studio — Owner Panel")
      .setDescription("Select an action below. Only the owner can see this.")
      .setColor("#ffb7c5")
      .setFooter({ text: "Owner Control Panel" });

    // SELECT MENU
    const menu = new StringSelectMenuBuilder()
      .setCustomId("owner-panel-options")
      .setPlaceholder("Choose an action...")
      .addOptions([
        { label: "Create Roles", value: "roles", emoji: "🎭" },
        { label: "Create Channels", value: "channels", emoji: "📺" },
        { label: "Create Categories", value: "categories", emoji: "📂" },
        { label: "Setup Admin Logs", value: "admin_logs", emoji: "📝" },
        { label: "Setup Staff Roles", value: "staff_roles", emoji: "👥" },
        { label: "Full Studio Template Setup", value: "studio_template", emoji: "🏗️" },
        { label: "Close Panel", value: "close", emoji: "❌" },
      ]);

    const row = new ActionRowBuilder().addComponents(menu);

    await i.reply({ embeds: [embed], components: [row], ephemeral: true });
  },
};
