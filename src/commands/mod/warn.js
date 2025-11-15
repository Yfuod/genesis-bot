import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("warn")
    .setDescription("Warn a member")
    .addUserOption(o=>o.setName("user").setDescription("User").setRequired(true))
    .addStringOption(o=>o.setName("reason").setDescription("Reason").setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),

  async execute(i){
    const user=i.options.getUser("user");
    const reason=i.options.getString("reason");
    const key=`warnings_${user.id}`;

    const current = i.client[key] || 0;
    i.client[key] = current + 1;

    await i.reply(`⚠️ Warned **${user.tag}** — Reason: ${reason}`);
  }
};