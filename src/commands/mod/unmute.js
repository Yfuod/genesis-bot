import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js";

export default {
  data:new SlashCommandBuilder()
    .setName("unmute")
    .setDescription("Unmute a member")
    .addUserOption(o=>o.setName("user").setDescription("User").setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),

  async execute(i){
    const user=i.options.getUser("user");
    const member=await i.guild.members.fetch(user.id);
    await member.timeout(null);

    await i.reply(`🔊 Unmuted **${user.tag}**`);
  }
};