
import { SlashCommandBuilder } from "discord.js";
export default {
  data:new SlashCommandBuilder()
    .setName("owner-mass-rename")
    .setDescription("Rename all members with a prefix")
    .addStringOption(o=>o.setName("prefix").setDescription("Prefix").setRequired(true)),
  async execute(i){
    if(i.user.id!==i.client.config.ownerId)
      return i.reply({content:"Not owner",ephemeral:true});
    const prefix=i.options.getString("prefix");
    let c=0;
    for(const m of i.guild.members.cache.values()){
      if(m.user.bot) continue;
      await m.setNickname(prefix + m.user.username).catch(()=>{});
      c++;
    }
    i.reply(`Renamed **${c}** members.`);
  }
};