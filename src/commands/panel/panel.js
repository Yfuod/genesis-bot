import { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } from "discord.js";
import config from "../../../config.json" assert { type: "json" };

export default {
  data:new SlashCommandBuilder()
    .setName("panel")
    .setDescription("🎛 Open the control panel"),

  async execute(i){
    const embed=new EmbedBuilder()
      .setTitle("🎛 Genesis Control Panel")
      .setColor(config.sakuraColor)
      .setDescription("Choose a category below~");

    const row=new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId("panel_owner").setLabel("Owner").setStyle(ButtonStyle.Danger),
      new ButtonBuilder().setCustomId("panel_admin").setLabel("Admin").setStyle(ButtonStyle.Primary),
      new ButtonBuilder().setCustomId("panel_mod").setLabel("Mod").setStyle(ButtonStyle.Success)
    );

    await i.reply({embeds:[embed],components:[row]});
  }
};