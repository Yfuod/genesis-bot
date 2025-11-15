import fs from "fs";
import path from "path";
import { REST, Routes } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

const cmds = [];

const commandsPath = path.join(process.cwd(), "src/commands");
for (const folder of fs.readdirSync(commandsPath)) {
  const folderPath = path.join(commandsPath, folder);
  for (const file of fs.readdirSync(folderPath).filter(f => f.endsWith(".js"))) {
    const cmd = (await import(`file://${folderPath}/${file}`)).default;
    cmds.push(cmd.data.toJSON());
  }
}

const rest = new REST().setToken(process.env.TOKEN);

rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: cmds })
  .then(() => console.log("Slash commands deployed"))
  .catch(console.error);
