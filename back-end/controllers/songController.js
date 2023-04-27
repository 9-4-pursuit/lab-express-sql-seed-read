const express = require("express");
const songs = express.Router();
const { getAllSongs, getASong, createSong, deleteSong, updateSong } = require('../queries/songs');
const { checkRequest, checkID } = require("../validations/checkSubmit.js");

//INDEX
songs.get('/', async (req, res) => {
    const allSongs = await getAllSongs();
    if (allSongs) {
        res.status(202).json(allSongs);
    } else {
        res.status(500).json({ error: 'Server Error on Get all songs' });
    }
});

//SHOW INDIVIDUAL RECORD
songs.get('/:id', async (req, res) => {
    const { id } = req.params;
    const song = await getASong(id);

    if (checkID(id, song.id)) {
        res.status(202).json(song);
    } else {
        res.redirect('/Error404');
    }
});

//CREATE
songs.post('/', checkRequest, async (req, res) => {
    const newSong = req.body;
    try {
        const addedSong = await createSong(newSong);
        res.status(202).json(addedSong);
    } catch (error) {
        res.status(400).json({ error: error });
    }
});

//DELETE
songs.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedSong = await deleteSong(id);

        if (checkID(id, deletedSong.id)) {
            //       if (Number(deletedSong.id) === Number(id)) {
            res.status(200).json(deletedSong);
        } else {
            res.redirect('/Error404');
        }
    } catch (error) {
        res.status(400).json({ error: error })
    }
});

//UPDATE
songs.put("/:id", checkRequest, async (req, res) => {
    const { id } = req.params;
    try {
        const updatedSong = await updateSong(id, req.body);
        //       if (Number(updatedSong.id) === Number(id)) {
            console.log(checkID(id, updatedSong.id));
        if (checkID(id, updatedSong.id)) {
            res.status(200).json(updatedSong);
        } else {
            res.redirect('/Error404');
        }
    } catch (error) {
        return error;
    }
});

module.exports = songs;