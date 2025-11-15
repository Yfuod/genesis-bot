
import { SlashCommandBuilder } from "discord.js";

export default {
  data:new SlashCommandBuilder()
    .setName("owner-disable-user")
    .setDescription("Disable a user — bot will ignore them")
    .addUserOption(o=>o.setName("user").setDescription("Target").setRequired(true)),

  async execute(i){
    if(i.user.id !== i.client.config.ownerId)
      return i.reply({content:"Not owner",ephemeral:true});

    const u=i.options.getUser("user");
    if(!i.client.disabledUsers) i.client.disabledUsers = new Set();
    i.client.disabledUsers.add(u.id);

    i.reply(`🚫 Bot will now ignore **${u.tag}**`);
  }
};