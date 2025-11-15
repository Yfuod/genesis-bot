import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js";
export default {
  data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Kick a member")
    .addUserOption(o=>o.setName("user").setDescription("User").setRequired(true))
    .addStringOption(o=>o.setName("reason").setDescription("Reason"))
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),

  async execute(i){
    const user=i.options.getUser("user");
    const reason=i.options.getString("reason")||"No reason";
    const member=await i.guild.members.fetch(user.id).catch(()=>null);
    if(!member) return i.reply({content:"User not found",ephemeral:true});
    await member.kick(reason);
    await i.reply(`Kicked **${user.tag}**`);
  }
};