const express = require("express");
const songs = express.Router();
const {getAllSongs, getOneSong, createSong, deleteSong, updateSong} = require("../queries/songs.js");
const {validateRequests, validateId} = require("../validations/checkSongs.js");

songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();

  if (allSongs){
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({error: "Server Error"});
  }
});

songs.get("/:id", validateId, async (req, res) => {
  const {id} = req.params;
  const oneSong = await getOneSong(id); 

  if (oneSong.id) {
    res.status(200).send(oneSong);
  } else {
    res.status(404).json({error: "Song not found"});
  }
});

songs.post("/", validateRequests, async (req, res) => {
  const newSong = req.body;

  try {
      const addedSong = await createSong(newSong);

      res.status(200).json(addedSong);
  } catch (error) {
    res.status(400).json({error: error});
  }
});

songs.delete("/:id", validateId, async(req, res) => {
  const {id} = req.params;

  try {
    const deletedSong = await deleteSong(id);
      if (deletedSong.id) {
        res.status(200).json(deletedSong);
      } else {
        res.status(404).json({error: "Song not found"})
      }
  } catch (error) {
    res.status(400).json({error: error});
  }
});

songs.put("/:id", validateRequests, async (req, res) => {
  const {id} = req.params;
  const songUpdates = req.body;

  try {
    const updatedSong = await updateSong(id, songUpdates);
    res.status(200).json(updatedSong);
  } catch (error) {
    res.status(400).json({error: error});
  }

});

module.exports = songs;