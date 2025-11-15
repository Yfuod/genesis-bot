import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { REST, Routes } from "discord.js";
import config from "./config.json" assert { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cmds = [];
const commandsPath = path.join(__dirname, "src/commands");

for (const section of fs.readdirSync(commandsPath)) {
  const sectionPath = path.join(commandsPath, section);
  for (const file of fs.readdirSync(sectionPath).filter(f => f.endsWith(".js"))) {
    const cmd = (await import(`file://${sectionPath}/${file}`)).default;
    cmds.push(cmd.data.toJSON());
  }
}

const rest = new REST().setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Deploying slash commands…");
    await rest.put(Routes.applicationCommands(config.clientId), { body: cmds });
    console.log("Slash commands deployed ✔");
  } catch (err) {
    console.error(err);
  }
})();