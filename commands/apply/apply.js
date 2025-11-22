
const { SlashCommandBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');

module.exports={
  data:new SlashCommandBuilder().setName("apply").setDescription("Apply for a role"),
  async execute(i){
    const modal=new ModalBuilder()
      .setCustomId("applyModal")
      .setTitle("Team Application");

    const role=new TextInputBuilder()
      .setCustomId("apply_role")
      .setLabel("Role (Scripter/Builder/Animator/VFX/GFX/Tester)")
      .setStyle(TextInputStyle.Short);

    const exp=new TextInputBuilder()
      .setCustomId("apply_exp")
      .setLabel("Experience")
      .setStyle(TextInputStyle.Paragraph);

    const port=new TextInputBuilder()
      .setCustomId("apply_port")
      .setLabel("Portfolio or Samples")
      .setStyle(TextInputStyle.Paragraph);

    const reason=new TextInputBuilder()
      .setCustomId("apply_reason")
      .setLabel("Why should we pick you?")
      .setStyle(TextInputStyle.Paragraph);

    modal.addComponents(
      new ActionRowBuilder().addComponents(role),
      new ActionRowBuilder().addComponents(exp),
      new ActionRowBuilder().addComponents(port),
      new ActionRowBuilder().addComponents(reason)
    );

    await i.showModal(modal);
  }
};
