const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
module.exports={
  data:new SlashCommandBuilder().setName("clear").setDescription("Clear messages")
  .addIntegerOption(o=>o.setName("amount").setDescription("Count").setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),
  async execute(i){
    const amt=i.options.getInteger("amount");
    await i.channel.bulkDelete(amt,true);
    i.reply({content:`Cleared ${amt} messages`,ephemeral:true});
  }
}