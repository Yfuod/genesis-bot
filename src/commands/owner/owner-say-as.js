
import { SlashCommandBuilder } from "discord.js";

export default {
  data:new SlashCommandBuilder()
    .setName("owner-say-as")
    .setDescription("Send a message as another channel")
    .addChannelOption(o=>o.setName("channel").setDescription("Channel").setRequired(true))
    .addStringOption(o=>o.setName("message").setDescription("Message").setRequired(true)),

  async execute(i){
    if(i.user.id!==i.client.config.ownerId)
      return i.reply({content:"Not owner",ephemeral:true});
    const ch=i.options.getChannel("channel");
    const msg=i.options.getString("message");
    await ch.send(msg);
    i.reply("📨 Message sent.");
  }
};