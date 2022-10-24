//Connection Database Postgresql

const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Yoga1996",
  database: "rental_mobilnew",
  host: "localhost",
  port: 5432,
});

module.exports = pool;
