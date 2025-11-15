
import { SlashCommandBuilder } from "discord.js";
export default {
  data:new SlashCommandBuilder()
    .setName("owner-enable-user")
    .setDescription("Re-enable a previously disabled user")
    .addUserOption(o=>o.setName("user").setDescription("Target").setRequired(true)),
  async execute(i){
    if(i.user.id !== i.client.config.ownerId)
      return i.reply({content:"Not owner",ephemeral:true});
    const u=i.options.getUser("user");
    if(i.client.disabledUsers) i.client.disabledUsers.delete(u.id);
    i.reply(`✅ Bot will now respond to **${u.tag}** again.`);
  }
};