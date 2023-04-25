// Import our DB
const db = require("../db/dbConfig");

const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM songs");
        return allSongs;
    } catch (error) {
        return error;
    }
};

const getASong = async (id) => {
    try {
        const song = await db.one("SELECT * FROM songs WHERE id=$1", id);
        return song;
    } catch (error) {
        return error;
    }
};

module.exports = {
    getAllSongs,
    getASong
};
