
import { SlashCommandBuilder } from "discord.js";

export default {
  data:new SlashCommandBuilder()
    .setName("owner-duplicate-channel")
    .setDescription("📂 Duplicate this channel"),

  async execute(i){
    if(i.user.id!==i.client.config.ownerId)
      return i.reply({content:"Not owner",ephemeral:true});

    const old=i.channel;
    const copy=await old.clone({ reason:"Owner duplicate" });
    await copy.setPosition(old.position+1);
    i.reply("📂 Channel duplicated.");
  }
};