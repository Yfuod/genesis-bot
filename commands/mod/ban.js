
const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
module.exports={
  data:new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Ban a user")
    .addUserOption(o=>o.setName("user").setDescription("User").setRequired(True))
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
  async execute(i){
    const user=i.options.getUser("user");
    await i.guild.members.ban(user.id).catch(()=>{});
    await i.reply(`Banned ${user.tag}`);
  }
};
