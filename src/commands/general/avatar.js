import { SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("🖼 Show user's avatar")
    .addUserOption(o => o.setName("user").setDescription("User")),

  async execute(i) {
    const user=i.options.getUser("user") || i.user;
    await i.reply(user.displayAvatarURL({ size: 4096 }));
  }
};