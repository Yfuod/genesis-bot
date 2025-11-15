
import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js";

export default {
  data:new SlashCommandBuilder()
    .setName("owner-nuke-channel")
    .setDescription("💥 Nuke this channel (recreate it)")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(i){
    if(i.user.id!==i.client.config.ownerId) 
      return i.reply({content:"Not owner",ephemeral:true});

    const old = i.channel;
    const pos = old.position;
    const newCh = await old.clone();
    await old.delete();
    await newCh.setPosition(pos);

    newCh.send("💥 **Channel has been nuked by the owner.**");
  }
};