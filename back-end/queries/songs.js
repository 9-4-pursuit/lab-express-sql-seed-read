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

// Create query
const createSong = async (songToAdd) => {
    const { name, artist, album, time, is_favorite } = songToAdd;
    try {
        const newSong = await db.one("INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *", [name, artist, album, time, is_favorite]);
        return newSong;
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllSongs,
    getOneSong,
    createSong
}