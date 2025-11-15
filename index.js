import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { Client, GatewayIntentBits, Collection } from "discord.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.commands = new Collection();

const commandsPath = path.join(__dirname, "src/commands");
for (const section of fs.readdirSync(commandsPath)) {
  const sectionPath = path.join(commandsPath, section);
  for (const file of fs.readdirSync(sectionPath).filter(f => f.endsWith(".js"))) {
    const cmd = (await import(`file://${sectionPath}/${file}`)).default;
    client.commands.set(cmd.data.name, cmd);
  }
}

const eventsPath = path.join(__dirname, "src/events");
for (const file of fs.readdirSync(eventsPath).filter(f => f.endsWith(".js"))) {
  const evt = (await import(`file://${eventsPath}/${file}`)).default;
  if (evt.once) client.once(evt.name, (...a) => evt.execute(...a, client));
  else client.on(evt.name, (...a) => evt.execute(...a, client));
}

client.login(process.env.TOKEN);