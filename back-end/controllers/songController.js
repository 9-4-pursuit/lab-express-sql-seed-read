const express = require("express");
const songs = express.Router();

const getAllSongs = require("../queries/songs");

songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs) {
    res.status(202).json(allSongs);
  } else {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = songs;
