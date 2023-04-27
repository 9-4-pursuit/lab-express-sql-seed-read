const express = require("express")
const songs = express.Router()
const { getAllSongs, getASong, createASong, updateSong, deleteSong } = require("../queries/songs")
const { checkRequest, checkId } = require("../validations/checkSongs")


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
songs.get('/:id',  async (req, res) => {
    const { id } = req.params;
    const song = await getASong(id)
    if(song.id) {
        res.status(200).json(song)
    } else {
        res.status(404).json({ error: 'Server Error'})
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

// update route

songs.put("/:id", async (req,res) => {
    const { id } = req.params
    const { body } = req
    try {
        const updatedSong = await updateSong(id,body)
        res.status(200).json(updatedSong)
    } catch (error) {
        res.status(400).json({error: error})
    }
})

//delete route
songs.delete("/:id", async (req,res) => {
    const { id } = req.params
    try {
        const deletedSong = await deleteSong(id)
        if (deletedSong.id){
            res.status(200).json(deletedSong)
        } else {
            throw new Error("A song with that Id does not exist")
        }
    } catch (error) {
        res.status(404).json({error: error})
    }
})



module.exports = songs