import { SlashCommandBuilder } from "discord.js";
import isOwner from "../../utils/isOwner.js";
export default {
  data:new SlashCommandBuilder().setName("say").setDescription("Say message").addStringOption(o=>o.setName("msg").setDescription("Message").setRequired(true)),
  async execute(i){
    if(!isOwner(i.user.id)) return i.reply({content:"No permission",ephemeral:true});
    const msg=i.options.getString("msg");
    await i.reply({content:"Sent",ephemeral:true});
    await i.channel.send(msg);
  }
};