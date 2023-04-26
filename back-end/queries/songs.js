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

module.exports = {
    getAllSongs,
    getOneSong
}