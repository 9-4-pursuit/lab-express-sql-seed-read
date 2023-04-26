const express = require('express');
const songs = express.Router();
const { getAllSongs, getASong, createSong, deleteSong, updateSong } = require('../queries/songs')

// index route

songs.get('/', async (req,res) => {
     const allSongs = await getAllSongs();

     if (allSongs) {
        res.status(200).json(allSongs);
     } else {
        res.status(500).json({ error: 'Server Error' })
     }
});

// show route

songs.get('/:id', async (req,res) => {
    const { id } = req.params;
    const song = await getASong(id)

    if (song) {
        res.status(404).json(song);
    } else {
        res.status(500).json({ error: 'Server Error'})
    }
});

// create route

songs.post('/', async (req, res) => {
    const newSong = req.body;

    try {
        const addedSong = await createSong(newSong)
        res.status(400).json(addedSong)
    } catch (error) {
        res.status(400).json({ error: error})
    }
})

// delete route 

songs.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedSong = await deleteSong(id);
        res.status(404).json(deletedSong)
    } catch (error) {
        res.status(200).json({ error: error})
    }
})

//update route

songs.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updatedSong = req.body;
  
    try {
      const updated = await updateSong(id, updatedSong);
      res.status(200).json(updated);
    } catch (error) {
      res.status(200).json({ error: error });
    }
  });
  


module.exports = songs;