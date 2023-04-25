const express = require("express");
const songs = express.Router();

songs.get("/", (req, res) => {
  res.status(200).send("Songs")
})

module.exports = songs;