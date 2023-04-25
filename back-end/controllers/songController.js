const express = require('express');
const songs = express.Router();
const { getAllSongs, getOneSong } = require('../queries/songs.js');

songs.get('/', async (req, res) => {
  const allSongs = await getAllSongs();

  if (allSongs) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: 'Server Error.'});
  }
})

songs.get('/:id', async (req, res) => {
  const { id } = req.params;
  const song = await getOneSong(id);

  if (song) {
    res.status(200).json(song);
  } else {
    res.status(500).json({ error: 'Server Error.'});
  }
})

module.exports = songs;