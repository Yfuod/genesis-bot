const { EmbedBuilder } = require("discord.js");
module.exports.createAnimeEmbed=(t="",d="")=>{
  return new EmbedBuilder().setColor("#9f50ff").setTitle(t).setDescription(d).setTimestamp();
};