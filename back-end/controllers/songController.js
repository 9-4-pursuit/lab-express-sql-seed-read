
const express = require("express");
const song = express.Router();
const { getAllSongs, getASong, createSong, deleteSong } = require("../queries/songs");

// GET ALL
song.get("/", async (req, res) => {
    const allSongs = await getAllSongs();

    if (allSongs) {
        res.status(200).json(allSongs);
    } else {
        res.status(500).json({ error: "Server Error Get" });
    }
});

// SHOW ONE
song.get("/:id", async (req, res) => {
    const { id } = req.params;
    const song = await getASong(id);

    if (song) {
        res.status(200).json(song);
    } else {
        res.status(500).json({ error: "Server Error Show" });
    }
});

// CREATE ROUTE
song.post("/", async (req, res) => {
    const newSong = req.body;

    try {
        const addedSong = await createSong(newSong);
        res.status(200).json(addedSong);
    } catch (error) {
        res.status(400).json({ error: error })
    }
});

// DELETE ROUTE
song.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const deletedSong = await deleteSong(id);
        res.status(200).json(deletedSong);
    } catch (error) {
        res.status(400).json({ error: error })
    }
});


module.exports = song;
