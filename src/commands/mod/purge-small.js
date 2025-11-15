import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js";

export default {
  data:new SlashCommandBuilder()
    .setName("purge-small")
    .setDescription("Delete up to 10 messages")
    .addIntegerOption(o=>o.setName("amount").setDescription("1-10").setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),

  async execute(i){
    const amt=i.options.getInteger("amount");
    if(amt<1||amt>10) return i.reply({content:"Amount must be 1-10",ephemeral:true});

    await i.channel.bulkDelete(amt,true);
    await i.reply({content:`Deleted ${amt} messages`,ephemeral:true});
  }
};