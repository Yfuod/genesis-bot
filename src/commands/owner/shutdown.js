import { SlashCommandBuilder } from "discord.js";
import isOwner from "../../utils/isOwner.js";
export default {
  data: new SlashCommandBuilder().setName("shutdown").setDescription("Shutdown bot"),
  async execute(i){
    if(!isOwner(i.user.id)) return i.reply({content:"Not owner",ephemeral:true});
    await i.reply("Shutting down...");
    process.exit(0);
  }
};