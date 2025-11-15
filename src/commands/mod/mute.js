import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js";

export default {
  data:new SlashCommandBuilder()
    .setName("mute")
    .setDescription("Mute a member")
    .addUserOption(o=>o.setName("user").setDescription("User").setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),

  async execute(i){
    const user=i.options.getUser("user");
    const member=await i.guild.members.fetch(user.id);
    await member.timeout(24*60*60*1000);

    await i.reply(`🔇 Muted **${user.tag}**`);
  }
};