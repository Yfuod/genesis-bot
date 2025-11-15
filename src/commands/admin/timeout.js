import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js";
export default {
  data:new SlashCommandBuilder()
    .setName("timeout")
    .setDescription("Timeout a member")
    .addUserOption(o=>o.setName("user").setDescription("User").setRequired(true))
    .addIntegerOption(o=>o.setName("minutes").setDescription("Minutes").setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),

  async execute(i){
    const user=i.options.getUser("user");
    const mins=i.options.getInteger("minutes");
    const member=await i.guild.members.fetch(user.id);
    await member.timeout(mins*60000);
    await i.reply(`Timed out **${user.tag}** for ${mins}m`);
  }
};