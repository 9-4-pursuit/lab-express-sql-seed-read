const express = require('express')
const song = express.Router();
const { getAllSongs, getOneSong, createSong } = require('../queries/songs')

// Index route
song.get('/', async (req, res) => {
    const allSongs = await getAllSongs();

    if (allSongs) {
        res.status(202).json(allSongs);
    } else {
        res.status(500).json({ error: 'Server Error' })
    }
})

// Show route
song.get('/:id', async (req, res) => {
    const { id } = req.params;
    const song = await getOneSong(id);

    if (song) {
        res.status(202).json(song);
    } else {
        res.status(500).json({ error: 'Server Error' })
    }
})

// Create route
song.post('/', async (req, res) => {
    const newSong = req.body;

    try {
        const addedSong = await createsong(newSong)
        res.status(200).json(addedSong) 
    } catch (error) {
        res.status(400).json({ error: error})
    }
})

module.exports = song;