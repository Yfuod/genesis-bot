
const { animeEmbed } = require('../utils/embed');
module.exports={
  name:"messageDelete",
  async execute(msg){
    const logChan=msg.guild.channels.cache.find(c=>c.name.includes("mod-logs"));
    if(!logChan) return;
    logChan.send({embeds:[animeEmbed("logs","Message Deleted", msg.author ? msg.author.tag : "Unknown")]});
  }
};
