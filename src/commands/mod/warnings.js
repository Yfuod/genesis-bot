import { SlashCommandBuilder } from "discord.js";

export default {
  data:new SlashCommandBuilder()
    .setName("warnings")
    .setDescription("Check warnings for a user")
    .addUserOption(o=>o.setName("user").setDescription("User").setRequired(true)),

  async execute(i){
    const user=i.options.getUser("user");
    const key=`warnings_${user.id}`;
    const count=i.client[key] || 0;

    await i.reply(`📘 **${user.tag}** has **${count}** warning(s).`);
  }
};