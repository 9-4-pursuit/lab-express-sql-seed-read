const db = require('../db/dbConfig');

// Index query
const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM songs")
        return allSongs;
    } catch (error) {
        return error;
    }
}

// Show query
const getOneSong = async (id) => {
    try {
        const song = await db.one("SELECT * FROM songs WHERE id=$1", id)
        return song;
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllSongs,
    getOneSong
}