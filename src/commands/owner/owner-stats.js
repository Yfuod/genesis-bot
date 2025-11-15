import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import os from "os";
export default {
  data:new SlashCommandBuilder().setName("owner-stats").setDescription("Show bot stats"),
  async execute(i){
    if(i.user.id!==i.client.config.ownerId) return i.reply({content:"Not owner",ephemeral:true});
    const embed=new EmbedBuilder()
      .setTitle("📊 Bot Stats")
      .addFields(
        {name:"Ping",value:`${i.client.ws.ping}ms`},
        {name:"RAM",value:`${(process.memoryUsage().rss/1024/1024).toFixed(2)} MB`},
        {name:"CPU Threads",value:`${os.cpus().length}`}
      );
    i.reply({embeds:[embed]});
  }
};