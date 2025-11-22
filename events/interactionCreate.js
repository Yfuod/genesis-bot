module.exports={
  name:"interactionCreate",
  async execute(i,client){
    if(i.isChatInputCommand()){
      const cmd=client.commands.get(i.commandName);
      if(!cmd) return;
      try{ await cmd.execute(i,client); }
      catch(e){ console.log(e); i.reply({content:"❌ Error",ephemeral:true}); }
    }
  }
}