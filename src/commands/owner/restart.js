import { SlashCommandBuilder } from "discord.js";
import isOwner from "../../utils/isOwner.js";
export default {
  data: new SlashCommandBuilder().setName("restart").setDescription("Restart bot"),
  async execute(i){
    if(!isOwner(i.user.id)) return i.reply({content:"Not owner",ephemeral:true});
    await i.reply("Restarting...");
    process.exit(1);
  }
};