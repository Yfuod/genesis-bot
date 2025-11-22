
module.exports={
  name:"interactionCreate",
  async execute(i,client){
    if(i.isChatInputCommand()){
      const c=client.commands.get(i.commandName);
      if(!c) return;
      try{ await c.execute(i,client); }
      catch(e){ console.log(e); i.reply({content:"❌ Error",ephemeral:true}); }
    }
  }
}
