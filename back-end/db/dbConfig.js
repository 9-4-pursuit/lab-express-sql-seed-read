// using package installed npm install pg-promise
// invoke pg-promise directly
const pgp = require('pg-promise')();

// tell it what db we are connecting to
require('dotenv').config();

// make a connection object
// const { PG_HOST, PG_PORT, PG_DATABASE, PG_USER } = process.env

const cn = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER
}

const db = pgp(cn);

module.exports = db;