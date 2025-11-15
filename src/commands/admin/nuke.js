
import { SlashCommandBuilder, PermissionFlagsBits, ChannelType } from "discord.js";
export default {
  data:new SlashCommandBuilder().setName("nuke")
    .setDescription("Clone and delete this channel.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction){
    const channel=interaction.channel;
    const pos=channel.position;
    const clone=await channel.clone();
    await clone.setPosition(pos);
    await channel.delete();
    await clone.send("💥 Channel nuked and recreated.");
  }
}
