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

// ensure folders exist
if(!fs.existsSync('./commands')) fs.mkdirSync('./commands');

// load commands
for(const folder of fs.readdirSync('./commands')){
  const folderPath = `./commands/${folder}`;
  if(!fs.lstatSync(folderPath).isDirectory()) continue;
  for(const f of fs.readdirSync(folderPath).filter(x=>x.endsWith('.js'))){
    const cmd=require(`${folderPath}/${f}`);
    client.commands.set(cmd.data.name, cmd);
  }
}

// events
for(const f of fs.readdirSync('./events')){
  const ev=require(`./events/${f}`);
  if(ev.once) client.once(ev.name,(...a)=>ev.execute(...a,client));
  else client.on(ev.name,(...a)=>ev.execute(...a,client));
}

client.login(process.env.TOKEN);
