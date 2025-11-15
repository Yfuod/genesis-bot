import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import config from "../../../config.json" assert { type: "json" };

export default {
  data:new SlashCommandBuilder()
    .setName("inventory")
    .setDescription("🎒 Show your inventory (placeholder)"),

  async execute(i){
    const embed=new EmbedBuilder()
      .setTitle("🎒 Inventory")
      .setColor(config.sakuraColor)
      .setDescription("Your game items will appear here later!")
      .addFields(
        {name:"⭐ Rare Item", value:"x2"},
        {name:"🔥 Epic Sword", value:"x1"}
      );
    await i.reply({embeds:[embed]});
  }
};