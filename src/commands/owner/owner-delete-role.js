import { SlashCommandBuilder } from "discord.js";
export default {
  data:new SlashCommandBuilder().setName("owner-delete-role")
    .setDescription("Delete a role")
    .addRoleOption(o=>o.setName("role").setDescription("Role").setRequired(true)),
  async execute(i){
    if(i.user.id!==i.client.config.ownerId) return i.reply({content:"Not owner",ephemeral:true});
    const r=i.options.getRole("role");
    await r.delete();
    i.reply("🗑 Role deleted.");
  }
};