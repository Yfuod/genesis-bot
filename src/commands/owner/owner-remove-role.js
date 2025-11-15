import { SlashCommandBuilder } from "discord.js";
export default {
  data:new SlashCommandBuilder().setName("owner-remove-role")
    .setDescription("Remove a role from a user")
    .addUserOption(o=>o.setName("user").setDescription("User").setRequired(true))
    .addRoleOption(o=>o.setName("role").setDescription("Role").setRequired(true)),
  async execute(i){
    if(i.user.id!==i.client.config.ownerId) return i.reply({content:"Not owner",ephemeral:true});
    const m=await i.guild.members.fetch(i.options.getUser("user").id);
    await m.roles.remove(i.options.getRole("role"));
    i.reply("❌ Role removed.");
  }
};