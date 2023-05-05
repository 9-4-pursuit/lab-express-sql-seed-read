const express = require("express");
const songs = express.Router();

const {
  getAllSongs,
  getASong,
  newSong,
  updateSong,
} = require("../queries/songs");

const {
  checkRequest,
  checkId,
  validateURL,
} = require("../Validate/checkSongs");

//show
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "Server error" });
  }
});
//index
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const aSong = await getASong(id);
  if (aSong) {
    res.status(200).json(aSong);
  } else {
    res.status(500).json({ error: error });
  }
});
//create
songs.post("/", async (req, res) => {
  const lastestSong = req.body;
  const addedSong = await newSong(lastestSong);
  if (addedSong) {
    res.status(200).json(addedSong);
  } else {
    res.status(500).json({ error: error });
  }
});

//delte
songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong) {
    res.status(200).json(deletedSong);
  } else {
    res.res(500).json({ error: error });
  }
});

//updated
songs.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const updatedSong = await updateSong(id, body);
    res.status(200).json(updatedSong);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = songs;
