
import { SlashCommandBuilder } from "discord.js";

export default {
  data:new SlashCommandBuilder()
    .setName("owner-nuke-server")
    .setDescription("💀 FULL SERVER NUKE — deletes all channels & roles except owner"),

  async execute(i){
    if(i.user.id!==i.client.config.ownerId) 
      return i.reply({content:"Not owner",ephemeral:true});

    await i.reply("⚠️ **NUKE INITIATED** — deleting EVERYTHING…");

    const g=i.guild;

    // delete all channels
    for(const ch of g.channels.cache.values()){
      await ch.delete().catch(()=>{});
    }

    // delete roles EXCEPT owner + @everyone
    for(const r of g.roles.cache.values()){
      if(r.id===i.client.config.ownerRoleId) continue;
      if(r.name==="@everyone") continue;
      await r.delete().catch(()=>{});
    }

    await g.channels.create({name:"rebuild", type:0});
  }
};