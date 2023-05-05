const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getASong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/songs.js");

// index page - all songs
songs.get("/", async (req, res) => {
  //http://localhost:3003/songs
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW one song
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getASong(id);
  if (song) {
    res.status(200).json(song);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE
songs.post("/", async (req, res) => {
  try {
    const song = await createSong(req.body);
    res.status(200).json(song);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

//update
songs.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedSong = await updateSong(id, req.body);
  if (updatedSong.id) {
    res.status(200).json(updatedSong);
  } else {
    res.status(404).json("song not found");
  }
});

// Delete
songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong.id) {
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json("song not found");
  }
});

module.exports = songs;