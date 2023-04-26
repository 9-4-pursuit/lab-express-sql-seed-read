const express = require('express')
const song = express.Router();
const { getAllSongs } = require('../queries/songs')

// Index route
song.get('/', async (req, res) => {
    const allSongs = await getAllSongs();

    if (allSongs) {
        res.status(202).json(allSongs);
    } else {
        res.status(500).json({ error: 'Server Error' })
    }
})

module.exports = song;