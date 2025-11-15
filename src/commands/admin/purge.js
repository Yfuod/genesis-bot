import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js";
export default {
  data:new SlashCommandBuilder()
    .setName("purge")
    .setDescription("Delete messages")
    .addIntegerOption(o=>o.setName("amount").setDescription("Amount").setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),

  async execute(i){
    const amt=i.options.getInteger("amount");
    if(amt<1||amt>100) return i.reply({content:"1-100 only",ephemeral:true});
    await i.channel.bulkDelete(amt,true);
    await i.reply({content:`Deleted ${amt} messages`,ephemeral:true});
  }
};