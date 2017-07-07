const pgp = require('pg-promise')({});
// localhost:5432 is the port for retrieving PSQL DB data in the .env file
const config = {
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  user: process.env.DB_USER
}


let db;
if (process.env.NODE_ENV === 'production') {
  db = pgp(process.env.DATABASE_URL);
} else {
  db = pgp(config);
}

module.exports = db;
