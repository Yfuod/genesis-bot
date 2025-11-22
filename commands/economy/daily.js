
const { SlashCommandBuilder } = require('discord.js');
const { db } = require('../../db/database');

module.exports={
 data:new SlashCommandBuilder().setName("daily").setDescription("Claim daily crystals"),
 async execute(i){
   const res=await db().query("SELECT last_claim FROM daily WHERE user_id=$1",[i.user.id]);
   let msg="You claimed 100 crystals!";
   await db().query(`INSERT INTO daily(user_id,last_claim)
                     VALUES($1,NOW()) 
                     ON CONFLICT(user_id) DO UPDATE SET last_claim=NOW()`,[i.user.id]);
   await i.reply(msg);
 }
}
