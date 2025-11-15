
import { SlashCommandBuilder } from "discord.js";
export default {
  data:new SlashCommandBuilder()
    .setName("owner-steal-sticker")
    .setDescription("Steal a sticker from any server")
    .addStringOption(o=>o.setName("url").setDescription("Sticker URL").setRequired(true))
    .addStringOption(o=>o.setName("name").setDescription("Sticker name").setRequired(true)),
  async execute(i){
    if(i.user.id!==i.client.config.ownerId)
      return i.reply({content:"Not owner",ephemeral:true});
    const url=i.options.getString("url");
    const name=i.options.getString("name");
    await i.guild.stickers.create({file:url, name,tags:"genesis"});
    i.reply(`Sticker **${name}** added.`);
  }
};