
import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js";
export default {
  data:new SlashCommandBuilder().setName("kick")
    .setDescription("Kick a user")
    .addUserOption(o=>o.setName("target").setDescription("User").setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
  async execute(interaction){
    const user=interaction.options.getUser("target");
    const mem=await interaction.guild.members.fetch(user.id);
    await mem.kick();
    await interaction.reply(`👢 Kicked **${user.tag}**`);
  }
}
