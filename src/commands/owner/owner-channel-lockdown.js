
import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js";

export default {
  data:new SlashCommandBuilder()
    .setName("owner-channel-lockdown")
    .setDescription("Lock ALL channels (server-wide)"),

  async execute(i){
    if(i.user.id !== i.client.config.ownerId)
      return i.reply({content:"Not owner",ephemeral:true});

    for(const ch of i.guild.channels.cache.values()){
      await ch.permissionOverwrites.edit(i.guild.id, {SendMessages:false}).catch(()=>{});
    }

    i.reply("🔒 **All channels locked.**");
  }
};