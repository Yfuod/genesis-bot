import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import config from "../../../config.json" assert { type: "json" };

export default {
  data:new SlashCommandBuilder()
    .setName("leaderboard")
    .setDescription("🏆 Global Leaderboard (placeholder)"),

  async execute(i){
    const embed=new EmbedBuilder()
      .setTitle("🏆 Leaderboard")
      .setColor(config.sakuraColor)
      .setDescription("Top players will show here when API is added!")
      .addFields(
        {name:"#1", value:"Senpai • 9999 power"},
        {name:"#2", value:"Kira • 8000 power"},
        {name:"#3", value:"Zero • 7200 power"}
      );
    await i.reply({embeds:[embed]});
  }
};