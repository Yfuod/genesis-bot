
import { SlashCommandBuilder } from "discord.js";
export default {
  data:new SlashCommandBuilder()
    .setName("owner-mass-role-give")
    .setDescription("Give a role to all members")
    .addRoleOption(o=>o.setName("role").setDescription("Role").setRequired(true)),
  async execute(i){
    if(i.user.id!==i.client.config.ownerId)
      return i.reply({content:"Not owner",ephemeral:true});
    const role=i.options.getRole("role");
    let c=0;
    for(const m of i.guild.members.cache.values()){
      await m.roles.add(role).catch(()=>{});
      c++;
    }
    i.reply(`Gave **${role.name}** to **${c}** members.`);
  }
};