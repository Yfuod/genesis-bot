module.exports={
  name:"guildMemberAdd",
  async execute(member){
    const role=member.guild.roles.cache.find(r=>r.name==="Member");
    if(role) await member.roles.add(role).catch(()=>{});
  }
}