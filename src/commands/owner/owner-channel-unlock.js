
import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js";

export default {
  data:new SlashCommandBuilder()
    .setName("owner-channel-unlock")
    .setDescription("Unlock ALL channels (server-wide)"),

  async execute(i){
    if(i.user.id !== i.client.config.ownerId)
      return i.reply({content:"Not owner",ephemeral:true});

    for(const ch of i.guild.channels.cache.values()){
      await ch.permissionOverwrites.edit(i.guild.id, {SendMessages:true}).catch(()=>{});
    }

    i.reply("🔓 **All channels unlocked.**");
  }
};