
import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js";
export default {
  data:new SlashCommandBuilder().setName("ban")
    .setDescription("Ban a user")
    .addUserOption(o=>o.setName("target").setDescription("User").setRequired(true))
    .addStringOption(o=>o.setName("reason").setDescription("Reason"))
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
  async execute(interaction){
    const user=interaction.options.getUser("target");
    const mem=await interaction.guild.members.fetch(user.id);
    await mem.ban({reason:interaction.options.getString("reason")||"No reason"});
    await interaction.reply(`🔨 Banned **${user.tag}**`);
  }
}
