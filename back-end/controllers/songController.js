const express = require('express');
const songs = express.Router();
const { getAllSongs, getASong, updateSong, deleteSong, createSong } = require('../queries/songs');


songs.get('/', async (req, res) => {
    const allSongs = await getAllSongs();

    if (allSongs) {
        res.status(200).json(allSongs);
    } else {
        res.status(500).json({error: 'Server Error'})
    }
});

songs.get('/:id', async (req, res) => {
    const { id } = req.params;
    const song = await getASong(id);

    if (song) {
        res.status(200).json(song);
    } else {
        res.status(500).json({error: 'Server Error'});
    };
});

songs.post('/', async (req, res) => {
    const newSong = req.body;
    try {
        const addedSong = await createSong(newSong);
        res.status(202).json(addedSong);
    } catch (error) {
        res.status(400).json({error: error});
    }
});

songs.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedSong = await deleteSong(id);
        res.status(200).json(deletedSong);
    } catch (error) {
        res.status(400).json({error: error});
    }
});

songs.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const updatedSong = await updateSong(id, body);
        res.status(200).json(updatedSong);
    } catch (error) {
        res.status(400).json({error: error});
    }
});

module.exports = songs;