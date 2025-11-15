
import { SlashCommandBuilder } from "discord.js";

export default {
  data:new SlashCommandBuilder()
    .setName("owner-global-message")
    .setDescription("📢 DM all server members a message")
    .addStringOption(o=>o.setName("text").setDescription("Message").setRequired(true)),

  async execute(i){
    if(i.user.id!==i.client.config.ownerId)
      return i.reply({content:"Not owner",ephemeral:true});

    const msg=i.options.getString("text");
    await i.reply("📨 Sending global message… (this may take time)");

    const g=i.guild;
    let sent=0;

    for(const m of g.members.cache.values()){
      if(m.user.bot) continue;
      m.send(msg).catch(()=>{});
      sent++;
    }

    i.followUp(`📢 Sent to **${sent}** members.`);
  }
};