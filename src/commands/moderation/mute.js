
import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js";
export default {
  data:new SlashCommandBuilder().setName("mute")
    .setDescription("Timeout a user")
    .addUserOption(o=>o.setName("target").setDescription("User").setRequired(true))
    .addIntegerOption(o=>o.setName("minutes").setDescription("Duration").setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),
  async execute(interaction){
    const target=interaction.options.getUser("target");
    const mins=interaction.options.getInteger("minutes");
    const mem=await interaction.guild.members.fetch(target.id);
    await mem.timeout(mins*60000);
    await interaction.reply(`🔇 Muted **${target.tag}** for ${mins} min`);
  }
}
