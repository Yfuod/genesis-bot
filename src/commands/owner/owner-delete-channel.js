import { SlashCommandBuilder } from "discord.js";
export default {
  data:new SlashCommandBuilder()
    .setName("owner-delete-channel")
    .setDescription("Owner deletes a channel")
    .addChannelOption(o=>o.setName("channel").setDescription("Channel").setRequired(true)),
  async execute(i){
    if(i.user.id!==i.client.config.ownerId) return i.reply({content:"Not owner",ephemeral:true});
    const ch=i.options.getChannel("channel");
    await ch.delete();
    i.reply(`🗑 Deleted **${ch.name}**`);
  }
};