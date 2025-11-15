
import { SlashCommandBuilder, EmbedBuilder } from "discord.js";

export default {
  data:new SlashCommandBuilder()
    .setName("owner-server-report")
    .setDescription("Generate a full server diagnostic report"),

  async execute(i){
    if(i.user.id!==i.client.config.ownerId)
      return i.reply({content:"Not owner",ephemeral:true});

    const g=i.guild;

    const bots=g.members.cache.filter(m=>m.user.bot).size;
    const humans=g.memberCount - bots;
    const roles=g.roles.cache.size;
    const channels=g.channels.cache.size;
    const boosts=g.premiumSubscriptionCount;

    const embed=new EmbedBuilder()
      .setTitle("📊 Server Diagnostic Report")
      .setColor("#ff66cc")
      .addFields(
        {name:"Members", value:`👤 Humans: ${humans}
🤖 Bots: ${bots}`, inline:true},
        {name:"Roles", value:`${roles}`, inline:true},
        {name:"Channels", value:`${channels}`, inline:true},
        {name:"Boosts", value:`${boosts}`, inline:true},
        {name:"Owner", value:`<@${g.ownerId}>`, inline:true},
        {name:"Server Created", value:`<t:${int(g.createdTimestamp/1000)}:R>`, inline:true},
      );

    i.reply({embeds:[embed]});
  }
};