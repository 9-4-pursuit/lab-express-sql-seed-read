const db = require('../db/dbCongif');

const getAllSongs = async () => {
    try {
        const allsongs = await db.any("SELECT * FROM songs");
        return allsongs;
    } catch (error) {
        return error;
    }
};

const getASong = async (id) => {
    try {
        const song = await db.one("SELECT * FROM songs WHERE id=$1", id)
        return song;

    } catch (error) {
        return error;
    }
};

const createSong = async (songToAdd) => {
    try {
        const newSong = await db.one ("INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *", [songToAdd.name, songToAdd.artist, songToAdd.album, songToAdd.time, songToAdd.is_favorite]);
        
        return newSong;

    } catch (error) {
        return error
    }
};

const deleteSong = async (id) => {
    try {
        const deletedSong = await db.one('DELETE FROM songs WHERE id=$1 RETURNING *', id);
        return deletedSong
        
    } catch (error) {
        return error
    }
}





module.exports = {
    getAllSongs,
    getASong,
    createSong,
    deleteSong
};