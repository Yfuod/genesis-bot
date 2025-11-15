import config from "../../config.json" assert { type: "json" };
import { EmbedBuilder } from "discord.js";

export default {
  name:"interactionCreate",

  async execute(i,client){
    if(!i.isButton()) return;

    if(i.customId==="panel_owner"){
      if(i.user.id!==config.ownerId) 
        return i.reply({content:"Only Owner!",ephemeral:true});

      const embed=new EmbedBuilder()
        .setTitle("🔧 Owner Controls")
        .setColor(config.sakuraColor)
        .addFields(
          {name:"/shutdown","value":"Shutdown bot"},
          {name:"/restart","value":"Restart bot"},
          {name:"/create-channel","value":"Create channels"},
          {name:"/create-role","value":"Create roles"}
        );

      return i.reply({embeds:[embed],ephemeral:true});
    }

    if(i.customId==="panel_admin"){
      const embed=new EmbedBuilder()
        .setTitle("🛡 Admin Controls")
        .setColor(config.sakuraColor)
        .addFields(
          {name:"/kick","value":"Kick members"},
          {name:"/ban","value":"Ban members"},
          {name:"/timeout","value":"Timeout users"}
        );
      return i.reply({embeds:[embed],ephemeral:true});
    }

    if(i.customId==="panel_mod"){
      const embed=new EmbedBuilder()
        .setTitle("🔨 Mod Controls")
        .setColor(config.sakuraColor)
        .addFields(
          {name:"/warn","value":"Warn users"},
          {name:"/mute","value":"Mute users"},
          {name:"/unmute","value":"Unmute users"}
        );
      return i.reply({embeds:[embed],ephemeral:true});
    }
  }
}