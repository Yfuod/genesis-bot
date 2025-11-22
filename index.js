require('dotenv').config();
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');

const client = new Client({
  intents:[
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.commands = new Collection();

// load commands
for(const folder of fs.readdirSync('./commands')){
  for(const f of fs.readdirSync(`./commands/${folder}`).filter(x=>x.endsWith('.js'))){
    const cmd = require(`./commands/${folder}/${f}`);
    client.commands.set(cmd.data.name, cmd);
  }
}

// load events
for(const f of fs.readdirSync('./events')){
  const ev = require(`./events/${f}`);
  if(ev.once) client.once(ev.name, (...args)=>ev.execute(...args, client));
  else client.on(ev.name, (...args)=>ev.execute(...args, client));
}

client.login(process.env.TOKEN);
