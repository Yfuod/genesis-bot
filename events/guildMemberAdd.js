
module.exports={
  name:"guildMemberAdd",
  async execute(member){
    const r=member.guild.roles.cache.find(x=>x.name==="Member");
    if(r) member.roles.add(r).catch(()=>{});
  }
}
