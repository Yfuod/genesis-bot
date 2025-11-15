import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js";

export default {
  data:new SlashCommandBuilder()
    .setName("genesis-setup")
    .setDescription("⚙️ Auto-create full Anime Genesis server structure")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(i){
    await i.reply("🌸 Setting up your Anime Genesis Studio server...");

    const g=i.guild;

    // ROLES
    const roles = {
      owner:{name:"Owner",color:"Red"},
      coowner:{name:"Co-Owner",color:"Black"},
      dev:{name:"Developer",color:"#00AAFF"},
      scripter:{name:"Scripter",color:"#ffaa00"},
      modeler:{name:"Modeler",color:"#00ffcc"},
      ui:{name:"UI Designer",color:"#ff66ff"},
      map:{name:"Map Designer",color:"#33ff33"},
      tester:{name:"Tester",color:"#cccccc"},
      member:{name:"Member",color:"#ffffff"},
      muted:{name:"Muted",color:"#555555"},
      bot:{name:"Bot",color:"#7289da"}
    };

    const createdRoles = {};
    for(const key in roles){
      createdRoles[key] = await g.roles.create({ name: roles[key].name, color: roles[key].color });
    }

    // CHANNELS
    const cats = {
      INFO:["welcome","rules","announcements","updates"],
      COMMUNITY:["general","media","bot-commands","support"],
      DEVELOPMENT:["dev-log","staff-chat","admin-tools"]
    };

    for(const cat in cats){
      const catCh = await g.channels.create({ name: cat.toLowerCase(), type: 4 });
      for(const ch of cats[cat]){
        await g.channels.create({ name: ch, type: 0, parent: catCh.id });
      }
    }

    await i.followUp("🌸 Setup complete! Anime Genesis Studio is ready!");
  }
};