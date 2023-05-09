const express = require("express");
const songs = express.Router();
const { getAllSongs, getOneSong, createASong, updateSong, deleteSong } = require("../queries/songs")

//INDEX
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

//Get/SHOW A SONG (1)
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getOneSong(id);
  if (song) {
    res.json(song);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

//CREATE SONG
songs.post("/", /* validations, */ async (req, res) => {
  try {
    const song = await createASong(req.body);
    res.status(200).json(song);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

//Put/UPDATE SONG
songs.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updateSong = await updatedSong(id, req.body);
  if (updateSong.id) {
    res.status(200).json(updateSong);
  } else {
    res.status(404).json("song not found");
  }
});

//DELETE
songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deleteSong = await deletedSong(id);
  if (deleteSong.id) {
    res.status(200).json(deleteSong);
  } else {
    res.status(404).json("song not found");
  }
});


module.exports = songs;
