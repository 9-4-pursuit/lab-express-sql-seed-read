const express = require('express')
const song = express.Router()
const {getAllSongs, getASong, createSong, deleteSong, updateSong} = require('../queries/songs')
const {checkRequest, checkId, validateURL} = require('../validations/checksongs')

//index route
song.get('/', async (req, res) => {
    const allSongs = await getAllSongs();

    if(allSongs) {
        res.status(202).json(allSongs);
    } else {
        res.status(500).json({error: 'server error'})
    }
})

//show route

song.get('/:id', checkId, async (req, res) => {
    const {id} = req.params;
    const song = await getASong(id);

    if(song){
        res.status(202).json(song);
    }else {
        res.status(500).json({error: 'server error'})
    }
})

// create
song.post('/', checkRequest, async (req, res) => {
    const newSong = req.body;
    try {
        const addedsong = await createSong(newSong)
        res.status(200).json(addedsong)
    } catch (error) {
        res.status(400).json({error: error})
    }
});

//delete

song.delete('/:id', checkRequest, async (req, res) => {
    const {id} = req.params;
    try {
        const deletedSong = await deleteSong(id);
        res.status(200).json(deletedSong)

    } catch(error) {
        res.status(400).json({error: error})
    }
})

// update

song.put('/:id', checkRequest, async (req, res) => {
    const {id} = req.params;
    const {body} = req;

    try {
        const updatedSong = await updateSong(id, body)
            res.status(200).json(updatedSong); 
    } catch (error) {
        res.status(400).json({error: error})  
    }
})
module.exports = song