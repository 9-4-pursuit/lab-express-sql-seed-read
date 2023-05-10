const db = require("../db/dbConfig");

//GET ALL
const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (error) {
    return error;
  }
};

//GET ONE
const getASong = async (id) => {
  try {
    const song = await db.one("SELECT * FROM songs WHERE id=$1", id);
    return song;
  } catch (error) {
    return error
  }
};


//CREATE ONE
const createSong = async (songToAdd) => {
  try {
    const newSong = await db.one(
      "INSERT INTO songs (title, artist, album, time, genre, is_favorite) VALUES ($1, $2, $3, $4, $5, $6)  RETURNING *",
      [
        songToAdd.title,
        songToAdd.artist,
        songToAdd.album,
        songToAdd.time,
        songToAdd.genre,
        songToAdd.is_favorite,
      ]
    );
    return newSong;
  } catch (error) {
    return error;
  }
};

//UPDATE ONE
const updateSong = async (id, songToUpdate) => {
  try {
    const updatedSong = await db.one(
      "UPDATE songs SET title=$1, artist=$2, album=$3, time=$4, genre=$5, is_favorite=$6 WHERE id=$7 RETURNING *",
      [
        songToUpdate.title,
        songToUpdate.artist,
        songToUpdate.album,
        songToUpdate.time,
        songToUpdate.genre,
        songToUpdate.is_favorite,
        id
      ]
    );
    return updatedSong;
  } catch (error) {
    return error;
  }
};

//DELETE ONE
const deleteSong = async (id) => {
  try {
    const deletedSong = await db.one(
      "DELETE FROM songs WHERE id=$1 RETURNING *",
      id
    );
    return deletedSong;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSongs,
  getASong,
  createSong,
  updateSong,
  deleteSong,
};
