const express = require("express")
const songs = express.Router()


// Index Route
songs.get("/", async (req, res) => {
const allSongs = await getAllSongs()

})

module.exports = songs