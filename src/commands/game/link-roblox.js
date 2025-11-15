import { SlashCommandBuilder } from "discord.js";

export default {
  data:new SlashCommandBuilder()
    .setName("link-roblox")
    .setDescription("🔗 Link your Roblox account (placeholder)")
    .addStringOption(o=>o.setName("username").setDescription("Your Roblox username").setRequired(true)),

  async execute(i){
    const user=i.options.getString("username");
    await i.reply(`🔗 Linked Roblox: **${user}** (placeholder)`);
  }
};