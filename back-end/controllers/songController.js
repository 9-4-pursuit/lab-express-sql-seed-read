const express = require("express");
const song = express.Router();
const { getAllSongs, getASong } = require("../queries/songs");

song.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  // BEFORE SQL INJECTION --> res.status(202).send('Index Route');

  if (allSongs) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

song.get('/:id', async (req, res) => {
    const { id } = req.params;
    const song = await getASong(id)

    if (song) {
        res.status(200).json(song);
    } else {
        res.status(500).json({ error: "Server Error" });

    }
})

module.exports = song;
