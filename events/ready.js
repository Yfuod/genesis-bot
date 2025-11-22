const { ActivityType, PermissionsBitField } = require("discord.js");

const ROLES=[
  {name:"Studio Founder",color:"#FF00FF",permissions:PermissionsBitField.Flags.Administrator},
  {name:"Co-Founder",color:"#FF33CC",permissions:PermissionsBitField.Flags.Administrator},
  {name:"Project Lead",color:"#FF5555"},
  {name:"Head Scripter",color:"#00FFFF"},
  {name:"Scripter",color:"#00AAAA"},
  {name:"Head Builder",color:"#FFA500"},
  {name:"Builder",color:"#FF8C00"},
  {name:"Animator",color:"#FFD700"},
  {name:"SFX & VFX Artist",color:"#FF00FF"},
  {name:"GFX Artist",color:"#FF69B4"},
  {name:"Tester",color:"#00FF00"},
  {name:"Holder",color:"#FFFFFF"},
  {name:"Member",color:"#9485FF"}
];

module.exports={
  name:"ready",
  once:true,
  async execute(client){
    console.log(client.user.tag+" ONLINE");
    client.user.setActivity("Anime Genesis Studio",{type:ActivityType.Playing});
    const guild=client.guilds.cache.get(process.env.GUILD_ID);
    if(!guild) return;

    for(const r of ROLES){
      let role=guild.roles.cache.find(x=>x.name===r.name);
      if(!role){
        await guild.roles.create({
          name:r.name,color:r.color,
          permissions:r.permissions??0
        });
      }
    }
    console.log("Roles created.");
  }
}