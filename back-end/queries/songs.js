const db = require('../db/dbConfig');

const getAllSongs = async () => {
    try {                    
        const allSongs = await db.any("SELECT * FROM music");
        return allSongs;
    } catch (error) {
        return error;
    }

};

const getASong = async (id) => {
    try {
        const song = await db.one('SELECT * FROM music WHERE id=$1',id);
        return song
    } 
    catch (error) {
      return error  
    }
};

const createSong = async (songToAdd) => {
    try {
        const newSong = await db.one("INSERT INTO music (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *", [songToAdd.name, songToAdd.artist, songToAdd.album, songToAdd.time, songToAdd.is_favorite]);
        return newSong;
    } catch (error) {
        return error;
    };
};

  const deleteSong = async (id) => {
    try {
        const deletedSong = await db.one("DELETE FROM music WHERE id=$1 RETURNING *", id);
        return deletedSong;
    } catch (error) {
        return error;
    };
};
module.exports = {
    getAllSongs,
    getASong,
    createSong,
    deleteSong
}