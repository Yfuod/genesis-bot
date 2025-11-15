
import { SlashCommandBuilder } from "discord.js";

export default {
  data:new SlashCommandBuilder()
    .setName("owner-clone-category")
    .setDescription("📁 Clone entire category structure"),

  async execute(i){
    if(i.user.id!==i.client.config.ownerId)
      return i.reply({content:"Not owner",ephemeral:true});

    const cat = i.channel.parent;
    if(!cat) return i.reply("This channel has no category.");

    const newCat = await i.guild.channels.create({
      name: cat.name + "-clone",
      type: 4
    });

    for(const ch of cat.children.cache.values()){
      const newCh = await i.guild.channels.create({
        name: ch.name,
        type: ch.type,
        parent: newCat.id,
      });
    }

    i.reply("📁 Category cloned.");
  }
};