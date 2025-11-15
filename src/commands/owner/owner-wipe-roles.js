
import { SlashCommandBuilder } from "discord.js";
export default {
  data:new SlashCommandBuilder()
    .setName("owner-wipe-roles")
    .setDescription("Delete ALL roles except owner and everyone"),
  async execute(i){
    if(i.user.id !== i.client.config.ownerId)
      return i.reply({content:"Not owner",ephemeral:true});
    for(const r of i.guild.roles.cache.values()){
      if(r.id===i.client.config.ownerRoleId) continue;
      if(r.name==="@everyone") continue;
      await r.delete().catch(()=>{});
    }
    i.reply("All non-owner roles wiped.");
  }
};