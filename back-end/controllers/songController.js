
const express = require("express");
const song = express.Router();
const {
    getAllSongs,
    getASong,
    createSong,
    deleteSong,
    updateSong
} = require("../queries/songs");
const {
    checkRequest,
    checkId,
    validateUrl,
    checkBoolean,
    checkName
} = require("../validations/checkSongs");

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
song.get("/:id", checkId, async (req, res) => {
    const { id } = req.params;
    const song = await getASong(id);

    if (song.id) {
        res.status(200).json(song);
    } else {
        res.status(404).json({ error: "ID Incorrect" });
    }
});

// CREATE ROUTE
song.post("/", checkRequest, async (req, res) => {
    const newSong = req.body;

    try {
        const addedSong = await createSong(newSong);
        res.status(200).json(addedSong);
    } catch (error) {
        res.status(400).json({ error: error })
    }
});

// DELETE ROUTE
song.delete("/:id", checkId, async (req, res) => {
    const { id } = req.params;

    try {
        const deletedSong = await deleteSong(id);
        if (deletedSong.id) {
            res.status(200).json(deletedSong);
        } else {
            throw new Error("No song with that ID found")
        }
    } catch (error) {
        res.status(404).json({ error: error })
    }
});

// UPDATE ROUTE
song.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const updatedSong = await updateSong(id, body);
        res.status(200).json(updatedSong);
    } catch (error) {
        res.status(400).json({ error: error });
    };
});


module.exports = song;
