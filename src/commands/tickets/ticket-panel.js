
import { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";

export default {
  data:new SlashCommandBuilder().setName("ticket-panel")
    .setDescription("Create ticket panel"),
  async execute(interaction){
    const row=new ActionRowBuilder().addComponents(
      new ButtonBuilder().setLabel("Open Ticket").setStyle(ButtonStyle.Primary).setCustomId("open_ticket")
    );
    await interaction.reply({content:"🎫 Ticket Panel",components:[row]});
  }
}
