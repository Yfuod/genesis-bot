import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js";

export default {
  data:new SlashCommandBuilder()
    .setName("clear-warnings")
    .setDescription("Clear warnings for a user")
    .addUserOption(o=>o.setName("user").setDescription("User").setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),

  async execute(i){
    const user=i.options.getUser("user");
    const key=`warnings_${user.id}`;
    i.client[key] = 0;

    await i.reply(`🧹 Cleared warnings for **${user.tag}**`);
  }
};