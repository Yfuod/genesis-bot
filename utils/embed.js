
const { EmbedBuilder } = require('discord.js');
function animeEmbed(title, desc){
 return new EmbedBuilder()
   .setColor("#9f50ff")
   .setTitle(title)
   .setDescription(desc)
   .setTimestamp();
}
module.exports={animeEmbed};
