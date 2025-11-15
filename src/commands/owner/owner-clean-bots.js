
import { SlashCommandBuilder } from "discord.js";
export default {
  data:new SlashCommandBuilder()
    .setName("owner-clean-bots")
    .setDescription("Kick all bots except the Genesis bot"),
  async execute(i){
    if(i.user.id !== i.client.config.ownerId)
      return i.reply({content:"Not owner",ephemeral:true});
    let c=0;
    for(const m of i.guild.members.cache.values()){
      if(m.user.bot && m.user.id !== i.client.user.id){
        await m.kick("Owner bot cleanup").catch(()=>{});
        c++;
      }
    }
    i.reply(`Kicked **${c}** bots.`);
  }
};