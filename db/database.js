
const { Client } = require('pg');
let db;

module.exports.initDB = async () => {
 db=new Client({
   connectionString:process.env.DATABASE_URL,
   ssl:{rejectUnauthorized:false}
 });
 await db.connect();

 await db.query(`CREATE TABLE IF NOT EXISTS warnings(
   id SERIAL PRIMARY KEY,
   user_id TEXT,
   moderator TEXT,
   reason TEXT,
   time TIMESTAMP DEFAULT NOW()
 )`);

 await db.query(`CREATE TABLE IF NOT EXISTS daily(
   user_id TEXT PRIMARY KEY,
   last_claim TIMESTAMP
 )`);

 console.log("DB Ready");
};

module.exports.db = ()=>db;
