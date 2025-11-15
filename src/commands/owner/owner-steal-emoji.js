
import { SlashCommandBuilder } from "discord.js";
export default {
  data: new SlashCommandBuilder()
    .setName("owner-steal-emoji")
    .setDescription("Steal an emoji from another server")
    .addStringOption(o=>o.setName("url").setDescription("Emoji URL").setRequired(true))
    .addStringOption(o=>o.setName("name").setDescription("Emoji name").setRequired(true)),
  async execute(i){
    if(i.user.id!==i.client.config.ownerId)
      return i.reply({content:"Not owner",ephemeral:true});
    const url=i.options.getString("url");
    const name=i.options.getString("name");
    await i.guild.emojis.create({attachment:url, name});
    i.reply(`Emoji **${name}** added.`);
  }
};