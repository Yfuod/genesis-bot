
import fs from "fs";
import path from "path";
import { Client, GatewayIntentBits, Collection } from "discord.js";
import config from "./config.json" assert { type: "json" };

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.commands = new Collection();

// Load commands
const commandsPath = path.join(process.cwd(), "src/commands");
for (const folder of fs.readdirSync(commandsPath)) {
  const folderPath = path.join(commandsPath, folder);
  for (const file of fs.readdirSync(folderPath).filter(f => f.endsWith(".js"))) {
    const cmd = (await import(`file://${folderPath}/${file}`)).default;
    client.commands.set(cmd.data.name, cmd);
  }
}

// Load events
const eventsPath = path.join(process.cwd(), "src/events");
for (const file of fs.readdirSync(eventsPath).filter(f => f.endsWith(".js"))) {
  const evt = (await import(`file://${eventsPath}/${file}`)).default;
  if (evt.once) client.once(evt.name, (...a) => evt.execute(...a, client));
  else client.on(evt.name, (...a) => evt.execute(...a, client));
}

client.login(config.token);
