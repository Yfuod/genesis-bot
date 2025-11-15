
import { SlashCommandBuilder } from "discord.js";

export default {
  data:new SlashCommandBuilder()
    .setName("owner-maintenance")
    .setDescription("🔒 Toggle maintenance mode")
    .addStringOption(o=>o.setName("mode").setDescription("on/off").setRequired(true)
      .addChoices(
        {name:"on", value:"on"},
        {name:"off", value:"off"}
      )),

  async execute(i){
    if(i.user.id!==i.client.config.ownerId)
      return i.reply({content:"Not owner",ephemeral:true});

    const mode=i.options.getString("mode");
    i.client.maintenance = (mode==="on");

    i.reply(`🔧 Maintenance mode: **${mode.toUpperCase()}**`);
  }
};