import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js";

export default {
  data:new SlashCommandBuilder()
    .setName("set-rank")
    .setDescription("🎖 Set a player's game rank (placeholder)")
    .addUserOption(o=>o.setName("user").setDescription("User").setRequired(true))
    .addStringOption(o=>o.setName("rank").setDescription("Rank name").setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(i){
    const user=i.options.getUser("user");
    const rank=i.options.getString("rank");
    await i.reply(`🎖 Set **${user.tag}** to rank **${rank}** (placeholder)`);
  }
};