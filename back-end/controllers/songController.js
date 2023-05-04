const express = require("express");
const songs = express.Router();

const { getAllSongs, getASong, newSong } = require("../queries/songs");

songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs) {
    res.status(202).json(allSongs);
  } else {
    res.status(500).json({ error: "Server error" });
  }
});

songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const aSong = await getASong(id);
  if (aSong) {
    res.status(202).json(aSong);
  } else {
    res.status(500).json({ error: error });
  }
});
songs.post("/", async (req, res) => {
  const lastestSong = req.body;
  const addedSong = await newSong(lastestSong);
  if (addedSong) {
    res.status(202).json(addedSong);
  } else {
    res.status(500).json({ error: error });
  }
});
module.exports = songs;
