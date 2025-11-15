
import { SlashCommandBuilder } from "discord.js";
export default {
  data:new SlashCommandBuilder()
    .setName("owner-wipe-channels")
    .setDescription("Delete ALL channels (keeps roles)"),
  async execute(i){
    if(i.user.id !== i.client.config.ownerId)
      return i.reply({content:"Not owner",ephemeral:true});
    for(const ch of i.guild.channels.cache.values()){
      await ch.delete().catch(()=>{});
    }
    await i.guild.channels.create({name:"general", type:0});
    i.reply("All channels wiped.");
  }
};