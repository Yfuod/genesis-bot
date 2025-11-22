
const { Client } = require('pg');
let db;

module.exports.initDB = async () => {
  db = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl:{rejectUnauthorized:false}
  });
  await db.connect();

  await db.query(`CREATE TABLE IF NOT EXISTS meta(id TEXT PRIMARY KEY, server_built BOOLEAN);`);
  await db.query(`INSERT INTO meta(id, server_built) VALUES('core', false)
    ON CONFLICT (id) DO NOTHING;`);

  await db.query(`CREATE TABLE IF NOT EXISTS applications(
    id SERIAL PRIMARY KEY,
    user_id TEXT,
    role TEXT,
    experience TEXT,
    portfolio TEXT,
    reason TEXT,
    status TEXT DEFAULT 'pending',
    time TIMESTAMP DEFAULT NOW()
  );`);

  await db.query(`CREATE TABLE IF NOT EXISTS tickets(
    id SERIAL PRIMARY KEY,
    user_id TEXT,
    type TEXT,
    channel_id TEXT,
    open_time TIMESTAMP DEFAULT NOW(),
    closed BOOLEAN DEFAULT false
  );`);

  await db.query(`CREATE TABLE IF NOT EXISTS warnings(
    id SERIAL PRIMARY KEY,
    user_id TEXT,
    moderator TEXT,
    reason TEXT,
    time TIMESTAMP DEFAULT NOW()
  );`);

  console.log("DB ready");
};

module.exports.db = ()=>db;
