// seperation of concerns, any logic that goes to controllers endpoint will be written inside bookmarksController
const express = require('express');
const songs = express.Router();
const { getAllSongs, getSong, createSong, deleteSong, updateSong } = require('../queries/songs');

// INDEX
songs.get('/', async (req, res) => {
    const allSongs = await getAllSongs();

    if (allSongs) {
        res.status(202).json(allSongs);
    } else {
        res.status(500).json({error: 'Server Error'})
    }
});

// SHOW
songs.get('/:id', async (req, res) => {
    const { id } = req.params;
    const songs = await getSong(id);

    if(songs) {
        res.json(songs);
    } else {
        res.status(404).json({ error: "Song was not found" })
    }
})

// CREATE
songs.post('/', async (req, res) => {
    const newSong = req.body;

    try {
        const addedSong = await createSong(newSong);
        res.status(202).json(addedSong)
    } catch (error) {
        res.status(400).json({ error: error })
    }
});

// DELETE
songs.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const removed = await deleteSong(id);
    if(deleteSong.id) {
        res.status(200).json(removed);
    } else {
        res.status(404).json({ error: "Song was not found"});
    }
});

// UPDATE
songs.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const updated = await updateSong(id, body);
        res.status(200).json(updated);
    } catch (error){
        res.status(400).json({ error: "Song could not be updated"});
    };
});


module.exports = songs;