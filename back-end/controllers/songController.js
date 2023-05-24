const express = require('express')
const songs = express.Router();
const { getAllSongs, getOneSong, createSong, deleteSong, updateSong } = require('../queries/songs')
const { checkRequest, checkId } = require('../validations/checkSongs')

// Index route
songs.get('/', async (req, res) => {
    const allSongs = await getAllSongs();

    if (allSongs) {
        res.status(200).json(allSongs);
    } else {
        res.status(500).json({ error: 'Server Error' })
    }
})

// Show route
songs.get('/:id', checkId, async (req, res) => {
    const { id } = req.params;

    try {
        const song = await getOneSong(id);
        res.status(200).json(song);
    } catch (error) {
        res.status(400).json({ error: 'Server Error' })
    }
})

// Create route
songs.post('/', checkRequest, async (req, res) => {
    const newSong = req.body;

    try {
        const addedSong = await createSong(newSong)
        res.status(200).json(addedSong) 
    } catch (error) {
        res.status(400).json({ error: error})
    }
})

// Delete route
songs.delete('/:id', checkId, async (req, res) => {
    const { id } = req.params;

    try {
        const deletedSong = await deleteSong(id);
        res.status(200).json(deletedSong);
    } catch (error) {
        res.status(400).json({ error: error});
    }
})

// Update route
songs.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    
    try {
        const updatedSong = await updateSong(id, body);
        res.status(200).json(updatedSong);
    } catch (error) {
        res.status(400).json({ error: error});
    }
})

module.exports = songs;