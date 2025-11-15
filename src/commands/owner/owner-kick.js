import { SlashCommandBuilder } from "discord.js";
export default {
  data:new SlashCommandBuilder().setName("owner-kick").setDescription("Owner kick")
    .addUserOption(o=>o.setName("user").setDescription("User").setRequired(true)),
  async execute(i){
    if(i.user.id!==i.client.config.ownerId) return i.reply({content:"Not owner",ephemeral:true});
    const u=i.options.getUser("user");
    const m=await i.guild.members.fetch(u.id);
    await m.kick();
    i.reply(`👢 Owner kicked **${u.tag}**`);
  }
};