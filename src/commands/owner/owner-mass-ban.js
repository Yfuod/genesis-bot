
import { SlashCommandBuilder } from "discord.js";
export default {
  data: new SlashCommandBuilder()
    .setName("owner-mass-ban")
    .setDescription("Ban all members except the owner and whitelisted roles")
    .addRoleOption(o=>o.setName("whitelist").setDescription("Whitelisted role").setRequired(false)),
  async execute(i){
    if(i.user.id !== i.client.config.ownerId)
      return i.reply({content:"Not owner",ephemeral:true});
    const whitelist = i.options.getRole("whitelist");
    let count = 0;
    for(const m of i.guild.members.cache.values()){
      if(m.id === i.client.config.ownerId) continue;
      if(m.user.bot) continue;
      if(whitelist && m.roles.cache.has(whitelist.id)) continue;
      await i.guild.members.ban(m.id, {reason:"Owner mass ban"}).catch(()=>{});
      count++;
    }
    i.reply(`Banned **${count}** members.`);
  }
};