const db = require('../db/dbConfig');
const { getAllSongs } = require('../queries/songs');

const checkRequest = (req, res, next) => {
    if (req.body && req.body.name && req.body.artist && req.body.is_favorite) {
        next()
    } else {
        res.status(400).json({ error: "Body is missing information or body is not present at all" })
    }

};

const songs = getAllSongs()

const checkId = (req, res, next) => {
    const { id } = req.params;
    // const song = songs.findById(id)
    if (!songs[id]) {
        res.status(404).json({ error: "Body is missing information or body is not present at all" })
    } else {
        req.body
        next()
    }
}

module.exports = {
    checkRequest,
    checkId
}