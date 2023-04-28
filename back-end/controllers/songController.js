const express = require('express');
const songs = express.Router();
const { getAllSongs, getOneSong, editSong, createSong, deleteSong } = require('../queries/songs.js');
const { checkId, checkRequest } = require('../validations/checkSongs.js');

//index route
songs.get('/', async (req, res) => {
  const allSongs = await getAllSongs();

  if (allSongs) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "Error getting the index of all the songs." });
  }
})

//show route
songs.get('/:id', checkId, async (req, res) => {
  const { id } = req.params;
  const song = await getOneSong(id);
  
  if (song.success) {
    res.status(200).json(song.payload);
  } else {
    res.status(404).json({ error: `Error: ${song.payload}` });
  }
})

//create route
songs.post('/', checkRequest, async (req, res) => {
  const newSong = req.body;
  const addedSong = await createSong(newSong);

  if (addedSong) {
    res.status(200).json(addedSong);
  } else {
    res.status(400).json({ error: "Error adding a new song." });
  }
})

//update route
songs.put('/:id', checkId, checkRequest, async (req, res) => {
  const { id } = req.params;
  const updateSong = req.body;
  const updatedSong = await editSong(id, updateSong);

  if (updatedSong.success) {
    res.status(200).json(updatedSong.payload);
  } else {
    res.status(404).json({ error: `Error: ${updatedSong.payload}` });
  }
})

//delete route
songs.delete('/:id', checkId, async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);

  if (deletedSong.success) {
    res.status(200).json(deletedSong.payload);
  } else {
    res.status(404).json({ error: `Error: ${deletedSong.payload}` });
  }
})


module.exports = songs;