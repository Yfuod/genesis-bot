import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { REST, Routes } from "discord.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cmds = [];
const commandsPath = path.join(__dirname, "src/commands");

for (const folder of fs.readdirSync(commandsPath)) {
  const folderPath = path.join(commandsPath, folder);
  for (const file of fs.readdirSync(folderPath).filter(f => f.endsWith(".js"))) {
    const cmd = (await import(`file://${folderPath}/${file}`)).default;
    cmds.push(cmd.data.toJSON());
  }
}

const rest = new REST().setToken(process.env.TOKEN);

rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: cmds })
  .then(() => console.log("Commands deployed"))
  .catch(console.error);
