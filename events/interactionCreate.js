
module.exports={
  name:"interactionCreate",
  async execute(i, client){
    if(i.isChatInputCommand()){
      const cmd=client.commands.get(i.commandName);
      if(!cmd) return;
      return cmd.execute(i,client);
    }

    if(i.isModalSubmit()){
      if(i.customId==="applyModal"){
        const { db } = require('../db/database');
        await db().query(
          `INSERT INTO applications(user_id, role, experience, portfolio, reason)
           VALUES($1,$2,$3,$4,$5)`,
          [
            i.user.id,
            i.fields.getTextInputValue("apply_role"),
            i.fields.getTextInputValue("apply_exp"),
            i.fields.getTextInputValue("apply_port"),
            i.fields.getTextInputValue("apply_reason")
          ]
        );

        const guild=i.guild;
        const role=guild.roles.cache.find(r=>r.name==="Applicant");
        if(role) await i.member.roles.add(role);

        const logChan=guild.channels.cache.find(c=>c.name.includes("applications-log"));
        if(logChan) logChan.send(`📨 New application from <@${i.user.id}>`);

        await i.reply({content:"Your application has been submitted!", ephemeral:true});
      }
    }

    if(i.isButton()){
      if(i.customId.startsWith("close_ticket")){
        const chan=i.channel;
        chan.send("Ticket closed.");
        await chan.delete().catch(()=>{});
      }
    }
  }
};
