const express = require('express')
const song = express.Router()
const { getAllSongs, getOneSong, createSong, deleteSong } = require('../queries/songs.js')

song.get('/', async (req, res) => {
    const allSongs = await getAllSongs();
    allSongs ? res.status(200).json(allSongs) : res.status(500).json({ error: 'server error' })
});

song.get('/:id', async (req, res) => {
    const { id } = req.params
    const song = await getOneSong(id)
    song ? res.status(200).json(song) : res.status(500).json({ error: 'server error' })
});

song.post('/', async (req, res) => {
    const newSong = req.body
    const createdSong = await createSong(newSong)
    createdSong ? res.status(200).json(createdSong) : res.status(500).json({ error: 'server error' })
});

song.delete('/:id', async (req, res) => {
    const { id } = req.params
    const deletedSong = await deleteSong(id)
    deletedSong ? res.status(200).json(deletedSong) : res.status(500).json({ error: 'server error' })
});

module.exports = song;