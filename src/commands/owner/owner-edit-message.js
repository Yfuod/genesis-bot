
import { SlashCommandBuilder } from "discord.js";

export default {
  data:new SlashCommandBuilder()
    .setName("owner-edit-message")
    .setDescription("Edit a message previously sent by the bot")
    .addStringOption(o=>o.setName("message_id").setDescription("Message ID").setRequired(true))
    .addStringOption(o=>o.setName("new_text").setDescription("New content").setRequired(true)),

  async execute(i){
    if(i.user.id!==i.client.config.ownerId)
      return i.reply({content:"Not owner",ephemeral:true});

    const id=i.options.getString("message_id");
    const txt=i.options.getString("new_text");

    try{
      const msg=await i.channel.messages.fetch(id);
      if(msg.author.id!==i.client.user.id)
        return i.reply({content:"❌ I can only edit my own messages.",ephemeral:true});

      await msg.edit(txt);
      i.reply("✏️ Message edited.");
    }catch(e){
      i.reply({content:"❌ Could not edit that message.",ephemeral:true});
    }
  }
};