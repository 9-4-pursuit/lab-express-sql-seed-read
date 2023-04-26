const express = require('express');
const songs = express.Router();
const { getAllSongs, getOneSong, editSong, createSong, deleteSong } = require('../queries/songs.js');

//index route
songs.get('/', async (req, res) => {
  const allSongs = await getAllSongs();

  if (allSongs) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: 'Server Error.'});
  }
})

//show route
songs.get('/:id', async (req, res) => {
  const { id } = req.params;
  const song = await getOneSong(id);

  if (song) {
    res.status(200).json(song);
  } else {
    res.status(500).json({ error: 'Server Error.'});
  }
})

//update route
songs.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updateSong = req.body;

  try {
    const updatedSong = await editSong(id, updateSong);
    res.status(202).json(updatedSong);
  } catch (error) {
    res.status(400).json({ error: error });
  }
})

//create route
songs.post('/', async (req, res) => {
  const newSong = req.body;

  try {
    const addedSong = await createSong(newSong);
    res.status(202).json(addedSong);
  } catch (error) {
    res.status(400).json({ error: error });
  }
})

//delete route
songs.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedSong = await deleteSong(id);
    res.status(200).json(deletedSong);
  } catch (error) {
    res.status(400).json({ error: error });
  }
})


module.exports = songs;