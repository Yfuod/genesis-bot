import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js";

export default {
  data:new SlashCommandBuilder()
    .setName("remove-rank")
    .setDescription("❌ Remove player's rank (placeholder)")
    .addUserOption(o=>o.setName("user").setDescription("User").setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(i){
    const user=i.options.getUser("user");
    await i.reply(`❌ Removed rank from **${user.tag}** (placeholder)`);
  }
};