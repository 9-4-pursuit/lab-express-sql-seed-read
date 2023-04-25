const pgp = require("pg-promise")();

require("dotenv").config();

// We are going to create a connection object, that pulls in the values from our PG-PROMISE .env
// We COULD destructure it first if we wanted to and then eliminate the process.env below
// const { PG_HOST, PG_PORT, PG_DATABASE, PG_USER} = process.env;
const cn = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER
};

// Now we pass our Connection Object to pgp
const db = pgp(cn);

module.exports = db;
