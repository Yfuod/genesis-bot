const { SlashCommandBuilder } = require('discord.js');
const { createAnimeEmbed } = require('../../utils/embed');
module.exports={
  data:new SlashCommandBuilder().setName("waifu").setDescription("Random waifu"),
  async execute(i){
    const list=["Zero Two","Asuna","Nezuko","Nami","Hinata"];
    const pick=list[Math.floor(Math.random()*list.length)];
    i.reply({embeds:[createAnimeEmbed("Your Waifu",pick)]});
  }
}