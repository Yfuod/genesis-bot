import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js";
export default {
  data:new SlashCommandBuilder().setName("owner-ban").setDescription("Owner ban")
    .addUserOption(o=>o.setName("user").setDescription("User").setRequired(true)),
  async execute(i){
    if(i.user.id!==i.client.config.ownerId) return i.reply({content:"Not owner",ephemeral:true});
    const u=i.options.getUser("user");
    await i.guild.members.ban(u.id);
    i.reply(`🔨 Owner banned **${u.tag}**`);
  }
};