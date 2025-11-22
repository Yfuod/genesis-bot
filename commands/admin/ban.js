const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
module.exports={
  data:new SlashCommandBuilder().setName("ban").setDescription("Ban user")
  .addUserOption(o=>o.setName("user").setDescription("User").setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
  async execute(i){
    const u=i.options.getUser("user");
    await i.guild.members.ban(u.id).catch(()=>{});
    i.reply(`Banned **${u.tag}**`);
  }
}