import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  Client,
  GatewayIntentBits,
  Partials,
  Collection
} from "discord.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Channel, Partials.Message, Partials.User]
});

client.commands = new Collection();

// LOAD COMMANDS
const commandsMainPath = path.join(__dirname, "src/commands");
for (const folder of fs.readdirSync(commandsMainPath)) {
  const folderPath = path.join(commandsMainPath, folder);
  const commandFiles = fs
    .readdirSync(folderPath)
    .filter((file) => file.endsWith(".js"));

  for (const file of commandFiles) {
    const filePath = `file://${folderPath}/${file}`;
    const cmd = (await import(filePath)).default;
    client.commands.set(cmd.data.name, cmd);
  }
}

// LOAD EVENTS
const eventsPath = path.join(__dirname, "src/events");
const eventFiles = fs
  .readdirSync(eventsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of eventFiles) {
  const event = (await import(`file://${eventsPath}/${file}`)).default;
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args, client));
  } else {
    client.on(event.name, (...args) => event.execute(...args, client));
  }
}

client.login(process.env.TOKEN);
