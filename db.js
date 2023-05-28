const pg = require("pg");

const username = "megan"; // Replace "megan" with your actual username
const password = "mego"; // Replace "mego" with your actual password

// Construct the connection URL with the username and password
const connectionString = `postgresql://${username}:${password}@localhost/lunchly`;

const db = new pg.Client(connectionString);

db.connect();

module.exports = db;
