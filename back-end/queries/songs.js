const db = require('../db/dbConfig');

const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM songs;");
        return allSongs;
    } catch (e) {
        return e;
    }

};

const getOneSong = async (id) => {
    try {
        const song = await db.one("SELECT * FROM songs WHERE id=$1", id)
        return song
    } catch (e) {
        return e
    }
};

const createSong = async (createdSong) => {
    const { name, artist, album, time, is_favorite } = createdSong

    try {
        const newSong = await db.one("INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *", [name, artist, album, time, is_favorite])
        return newSong;
    } catch (e) {
        return e
    }
};

const deleteSong = async (id) => {
    try {
        const deletedSong = await db.one("DELETE FROM songs WHERE id=$1 RETURNING *", id)
        return deletedSong
    } catch (e) {
        return e
    }
};

module.exports = {
    getAllSongs,
    getOneSong,
    createSong,
    deleteSong
}