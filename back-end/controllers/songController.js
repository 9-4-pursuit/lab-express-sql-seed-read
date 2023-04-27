const express = require("express")
const songs = express.Router()
const { getAllSongs, getASong, createASong } = require("../queries/songs")
const { checkRequest } = require("../validations/checkSongs")


// Index Route
songs.get("/", async (req, res) => {
const allSongs = await getAllSongs()

    if(allSongs) {
        res.status(200).json(allSongs)
    } else {
        res.status(500).json({ error: "Server Error"})
    }
})

// show route
songs.get('/:id', async (req, res) => {
    const { id } = req.params;
    const song = await getASong(id)
    if(song) {
        res.status(200).json(song)
    } else {
        res.status(500).json({ error: 'Server Error'})
    }
})

// create route
songs.post('/', checkRequest, async (req, res) => {
    const newSong = req.body
    try {
        const addedSong = await createASong(newSong)
        res.status(200).json(addedSong)
    } catch (error) {
        res.status(400).json({error: error})
    }
})

module.exports = songs