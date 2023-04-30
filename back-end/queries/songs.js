const db = require('../db/dbConfig');

// const { getAllSongs, getSong, createSong, deleteSong, updateSong } = require('../queries/songs');

// GET
const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM songs");  // .any() means accept anything that returns from db
        return allSongs;
    } catch (error) {
        return error;
    }
};

// SHOW
const getSong = async (id) => {
    try {
        const song = await db.oneOrNone("SELECT * FROM songs WHERE id=$1", id);  
        return song;
        // adding a variable to sql query. takes id and injects it into variable id=$1
    } catch (error) {
        return error;
    }
};

// CREATE
const createSong = async (song) => {
    try {
        const newSong = await db.one("INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *", [song.name, song.artist, song.album, song.time, song.is_favorite]);
        return newSong;
    } catch (error) {
        return error;
    };
};

// DELETE
const deleteSong = async (id) => {

    try {
        const removed = await db.one("DELETE FROM songs WHERE id=$1 RETURNING *", id);
        return removed;
    } catch (error) {
        return error;
    };
};

// UPDATE
const updateSong = async (id, song) => {
    // const { name, url, category, is_favorite } = bookmark;
    
    try {
        const updated = await db.one("UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING *",
        [song.name, song.artist, song.album, song.time, song.is_favorite], id);
        
        return updated;
    } catch (error) {
        return error;
    };
};


module.exports = {
  getAllSongs, 
  getSong, 
  createSong, 
  deleteSong, 
  updateSong
};