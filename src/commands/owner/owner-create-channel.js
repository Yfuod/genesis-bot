import { SlashCommandBuilder } from "discord.js";
export default {
  data:new SlashCommandBuilder()
    .setName("owner-create-channel")
    .setDescription("Owner creates a channel")
    .addStringOption(o=>o.setName("name").setDescription("Channel name").setRequired(true)),
  async execute(i){
    if(i.user.id!==i.client.config.ownerId) return i.reply({content:"Not owner",ephemeral:true});
    const name=i.options.getString("name");
    await i.guild.channels.create({name,type:0});
    i.reply(`📢 Created channel **${name}**`);
  }
};