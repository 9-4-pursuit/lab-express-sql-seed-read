const db = require('../db/dbConfig');

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
        const song = await db.one('SELECT * FROM songs WHERE id=$1',id);
        return song
    } 
    catch (error) {
      return error  
    }
};

const addSong = async (name, artist, album, time, is_favorite) => {
    try {
      const query = 'INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *';
      const song = await db.one(query, [name, artist, album, time, is_favorite]);
      return song;
    } catch (error) {
      return error;
    }
  };

module.exports = {
    getAllSongs,
    getASong,
    addSong
}