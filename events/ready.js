
const { ChannelType } = require('discord.js');
const { db } = require('../db/database');

module.exports={
  name:"ready",
  once:true,
  async execute(client){
    console.log(client.user.tag, "online");
    const guild=client.guilds.cache.get(process.env.GUILD_ID);
    if(!guild) return;

    const q=await db().query("SELECT server_built FROM meta WHERE id='core'");
    if(!q.rows.length) return;

    if(!q.rows[0].server_built){
      const logsCat=await guild.channels.create({name:"LOGS",type:ChannelType.GuildCategory});
      await guild.channels.create({name:"🔐・staff-logs",type:ChannelType.GuildText,parent:logsCat.id});
      await guild.channels.create({name:"📝・mod-logs",type:ChannelType.GuildText,parent:logsCat.id});
      await guild.channels.create({name:"🎟️・tickets-log",type:ChannelType.GuildText,parent:logsCat.id});
      await guild.channels.create({name:"📨・applications-log",type:ChannelType.GuildText,parent:logsCat.id});
      await db().query("UPDATE meta SET server_built=true WHERE id='core'");
    }
  }
};
