import { SlashCommandBuilder } from "discord.js";
import { isOwner } from "../../utils/isOwner.js";

export default {
  data: new SlashCommandBuilder()
    .setName("create-role")
    .setDescription("Owner only: Create role")
    .addStringOption(o => o.setName("name").setDescription("Role name").setRequired(true)),
  async execute(i) {
    if (!isOwner(i.user.id)) return i.reply({ content:"⛔ Owner only", ephemeral:true });

    await i.guild.roles.create({ name: i.options.getString("name"), color: "#FFB7C5" });
    i.reply("🌸 Role created");
  }
};
