import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import config from "../../../config.json" assert { type: "json" };

export default {
  data:new SlashCommandBuilder()
    .setName("stats")
    .setDescription("📊 Show your game stats (placeholder)"),

  async execute(i){
    const embed=new EmbedBuilder()
      .setTitle("📊 Player Stats")
      .setColor(config.sakuraColor)
      .setDescription("These stats will link to your game later!")
      .addFields(
        {name:"Level", value:"12"},
        {name:"Power", value:"3450"},
        {name:"Coins", value:"123,000"}
      );
    await i.reply({embeds:[embed]});
  }
};