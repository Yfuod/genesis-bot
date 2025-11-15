import { SlashCommandBuilder } from "discord.js";
export default {
  data:new SlashCommandBuilder().setName("owner-give-role")
    .setDescription("Give a role to a user")
    .addUserOption(o=>o.setName("user").setDescription("User").setRequired(true))
    .addRoleOption(o=>o.setName("role").setDescription("Role").setRequired(true)),
  async execute(i){
    if(i.user.id!==i.client.config.ownerId) return i.reply({content:"Not owner",ephemeral:true});
    const m=await i.guild.members.fetch(i.options.getUser("user").id);
    await m.roles.add(i.options.getRole("role"));
    i.reply("🎖 Role added.");
  }
};