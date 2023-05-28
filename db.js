const pg = require("pg");

const db = new pg.Client({
  user: "megan",
  password: "mego", 
  database: "lunchly",
});

db.connect();

module.exports = db;
