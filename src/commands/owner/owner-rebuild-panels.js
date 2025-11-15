
import { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } from "discord.js";
import config from "../../../config.json" assert { type:"json" };

export default {
  data:new SlashCommandBuilder()
    .setName("owner-rebuild-panels")
    .setDescription("🔧 Rebuild the main /panel UI")
    .addChannelOption(o=>o.setName("channel").setDescription("Target channel").setRequired(true)),

  async execute(i){
    if(i.user.id!==i.client.config.ownerId)
      return i.reply({content:"Not owner",ephemeral:true});

    const channel=i.options.getChannel("channel");

    const embed=new EmbedBuilder()
      .setTitle("🎛 Genesis Control Panel")
      .setColor(config.sakuraColor)
      .setDescription("Choose a category below~");

    const row=new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId("panel_owner").setLabel("Owner").setStyle(ButtonStyle.Danger),
      new ButtonBuilder().setCustomId("panel_admin").setLabel("Admin").setStyle(ButtonStyle.Primary),
      new ButtonBuilder().setCustomId("panel_mod").setLabel("Mod").setStyle(ButtonStyle.Success)
    );

    await channel.send({embeds:[embed],components:[row]});
    i.reply("🔧 Panels rebuilt.");
  }
};