import fs from "fs";
import path from "path";
import { REST, Routes } from "discord.js";
import config from "./config.json" assert { type: "json" };

const commands = [];

const commandsPath = path.join(process.cwd(), "src/commands");
for (const folder of fs.readdirSync(commandsPath)) {
  const folderPath = path.join(commandsPath, folder);
  for (const file of fs.readdirSync(folderPath).filter(f => f.endsWith(".js"))) {
    const cmd = (await import(`file://${folderPath}/${file}`)).default;
    commands.push(cmd.data.toJSON());
  }
}

const rest = new REST().setToken(config.token);

console.log("🌸 Deploying slash commands...");

rest
  .put(Routes.applicationCommands(config.clientId), { body: commands })
  .then(() => console.log("🌸 Slash commands deployed!"))
  .catch(console.error);
