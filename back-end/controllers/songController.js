const express = require('express')
const song = express.Router()

song.get('/', async (req, res) => {
    res.status(200).send('the index')
});

module.exports = song;