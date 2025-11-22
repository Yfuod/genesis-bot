
module.exports={
  name:"interactionCreate",
  async execute(i,client){
    if(i.isChatInputCommand()){
      const cmd=client.commands.get(i.commandName);
      if(cmd) await cmd.execute(i,client);
    }
  }
}
