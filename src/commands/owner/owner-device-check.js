
import { SlashCommandBuilder } from "discord.js";

export default {
  data:new SlashCommandBuilder()
    .setName("owner-device-check")
    .setDescription("Check what device a user is on")
    .addUserOption(o=>o.setName("user").setDescription("Target user").setRequired(true)),

  async execute(i){
    if(i.user.id !== i.client.config.ownerId)
      return i.reply({content:"Not owner",ephemeral:true});

    const u=i.options.getUser("user");
    const m=await i.guild.members.fetch(u.id);

    const d = m.presence?.clientStatus || {};
    const types = Object.keys(d).join(", ") || "Offline / Invisible";

    i.reply(`📱 **${u.tag}** is on: **${types}**`);
  }
};