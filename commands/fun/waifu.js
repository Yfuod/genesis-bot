
const { SlashCommandBuilder } = require('discord.js');
module.exports={
 data:new SlashCommandBuilder().setName("waifu").setDescription("Random waifu"),
 async execute(i){
   const list=["Zero Two","Asuna","Hinata","Nezuko"];
   const pick=list[Math.floor(Math.random()*list.length)];
   await i.reply("Your waifu: **"+pick+"**");
 }
}
