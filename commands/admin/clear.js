
const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
module.exports={
  data:new SlashCommandBuilder().setName("clear").setDescription("Clear msg")
    .addIntegerOption(o=>o.setName("amount").setDescription("Count").setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),
  async execute(i){
    const a=i.options.getInteger("amount");
    await i.channel.bulkDelete(a,true);
    i.reply({content:`Deleted ${a} msgs`,ephemeral:true});
  }
}
