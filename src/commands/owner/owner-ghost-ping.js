
import { SlashCommandBuilder } from "discord.js";

export default {
  data:new SlashCommandBuilder()
    .setName("owner-ghost-ping")
    .setDescription("Ping a user without leaving a message")
    .addUserOption(o=>o.setName("user").setDescription("Target").setRequired(true)),
  async execute(i){
    if(i.user.id!==i.client.config.ownerId)
      return i.reply({content:"Not owner",ephemeral:true});
    const u=i.options.getUser("user");
    const msg=await i.channel.send(`<@${u.id}>`);
    setTimeout(()=>msg.delete().catch(()=>{}), 200);
    i.reply({content:"👻 Ghost ping sent.", ephemeral:true});
  }
};