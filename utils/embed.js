
const { EmbedBuilder } = require('discord.js');

const BANNERS={
  mod:"https://i.imgur.com/1Q9Z1Zp.jpeg",
  ticket:"https://i.imgur.com/t1N8usR.jpeg",
  apply:"https://i.imgur.com/3M2jNpo.jpeg",
  logs:"https://i.imgur.com/zl7YjCk.jpeg",
  fun:"https://i.imgur.com/HLW2zJx.jpeg",
  gacha:"https://i.imgur.com/4z6kPpq.jpeg",
  util:"https://i.imgur.com/PXz0o5K.jpeg",
  economy:"https://i.imgur.com/f6F8IRO.jpeg"
};

function animeEmbed(cat,title,desc){
  return new EmbedBuilder()
    .setColor("#9f50ff")
    .setTitle(title)
    .setDescription(desc)
    .setImage(BANNERS[cat]||BANNERS.util)
    .setFooter({text:"Anime Genesis Studio • V6"})
    .setTimestamp();
}

module.exports={animeEmbed};
