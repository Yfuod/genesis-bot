
require('dotenv').config();
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('fs');
const { initDB } = require('./db/database');

const client = new Client({
  intents:[
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent
  ]
});

client.commands=new Collection();
for(const folder of fs.readdirSync('./commands')){
  for(const file of fs.readdirSync('./commands/'+folder).filter(f=>f.endsWith('.js'))){
    const cmd=require(`./commands/${folder}/${file}`);
    client.commands.set(cmd.data.name, cmd);
  }
}

for(const file of fs.readdirSync('./events')){
  const ev=require(`./events/${file}`);
  if(ev.once) client.once(ev.name, (...a)=>ev.execute(...a,client));
  else client.on(ev.name, (...a)=>ev.execute(...a,client));
}

initDB().then(()=> client.login(process.env.TOKEN));
