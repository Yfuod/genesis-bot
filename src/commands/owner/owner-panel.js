
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
    const OWNER_ID = "1201992634667638886";
    if (i.user.id !== OWNER_ID)
      return i.reply({ content: "❌ Only the owner can use this.", ephemeral: true });

    const embed = new EmbedBuilder()
      .setTitle("🌸 Anime Genesis Studio — Owner Panel")
      .setDescription("Select an action below.")
      .setColor("#ffb7c5");

    const menu = new StringSelectMenuBuilder()
      .setCustomId("owner-panel-options")
      .addOptions([
        { label:"Create Roles", value:"roles", emoji:"🎭"},
        { label:"Create Channels", value:"channels", emoji:"📺"},
        { label:"Create Categories", value:"categories", emoji:"📂"},
        { label:"Setup Admin Logs", value:"admin_logs", emoji:"📝"},
        { label:"Full Template Setup", value:"studio_template", emoji:"🏗️"},
        { label:"Close Panel", value:"close", emoji:"❌"},
      ]);

    await i.reply({
      embeds:[embed],
      components:[new ActionRowBuilder().addComponents(menu)],
      ephemeral:true
    });
  }
};
