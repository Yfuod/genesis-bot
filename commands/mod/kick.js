
const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports={
 data:new SlashCommandBuilder()
   .setName("kick")
   .setDescription("Kick a user")
   .addUserOption(o=>o.setName("user").setDescription("User").setRequired(true))
   .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
 async execute(i){
   const user=i.options.getUser("user");
   await i.guild.members.kick(user).catch(()=>{});
   await i.reply("Kicked "+user.tag);
 }
}
