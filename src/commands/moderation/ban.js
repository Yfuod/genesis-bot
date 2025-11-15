import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js";
export default {
  data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Ban a user")
    .addUserOption(o => o.setName("user").setDescription("User").setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
  async execute(i) {
    const u = i.options.getUser("user");
    const m = await i.guild.members.fetch(u.id);
    await m.ban();
    i.reply(`❌ Banned **${u.tag}**`);
  }
};
