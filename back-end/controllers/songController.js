const express = require('express')
const song = express.Router()
const { getAllSongs } = require('../queries/songs.js')

song.get('/', async (req, res) => {
    const allSongs = await getAllSongs();
    allSongs ? res.status(200).json(allSongs) : res.status(500).json({ error: 'server error' })
});

module.exports = song;