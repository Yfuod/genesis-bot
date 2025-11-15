import { EmbedBuilder } from "discord.js";
import config from "../../config.json" assert { type: "json" };

export default {
  name: "guildMemberAdd",
  async execute(member) {
    const channel = member.guild.systemChannel;
    if (!channel) return;
    const embed = new EmbedBuilder()
      .setTitle("💮 Welcome!")
      .setColor(config.sakuraColor)
      .setDescription(`Welcome to **Anime Genesis Studio**, ${member}!`);
    channel.send({ embeds:[embed] });
  }
};