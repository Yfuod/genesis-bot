
import { Client, GatewayIntentBits, Collection } from "discord.js";
import config from "./config.json" assert {type:"json"};
import fs from "fs";
import path from "path";

const client = new Client({intents:[GatewayIntentBits.Guilds,GatewayIntentBits.GuildMembers]});
client.commands=new Collection();

const commandsPath = path.join(process.cwd(),"src/commands");
for(const folder of fs.readdirSync(commandsPath)){
  for(const file of fs.readdirSync(commandsPath+"/"+folder).filter(f=>f.endsWith(".js"))){
    const cmd = (await import(`./src/commands/${folder}/${file}`)).default;
    client.commands.set(cmd.data.name, cmd);
  }
}

client.on("interactionCreate",async i=>{
  if(!i.isChatInputCommand()) return;
  const cmd = client.commands.get(i.commandName);
  if(cmd) await cmd.execute(i);
});

client.once("ready",()=>console.log("Genesis Online"));
client.login(config.token);
