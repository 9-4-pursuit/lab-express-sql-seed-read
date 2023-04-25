const express = require("express");
const songs = express.Router();
const { getAllSongs, getASong } = require('../queries/songs');

songs.get('/', async (req, res) => {
    const allSongs = await getAllSongs();
    if (allSongs) {
        res.status(202).json(allSongs);
    } else {
        res.status(500).json({error: 'Server Error on Get all songs'});
    }
});

songs.get('/:id', async (req, res) => {
    const { id } = req.params;
    const song = await getASong(id);
    if (song) {
        res.status(202).json(song);
    } else {
        res.status(500).json({error: 'Server Error on Get a song'})
    }
});

module.exports = songs;