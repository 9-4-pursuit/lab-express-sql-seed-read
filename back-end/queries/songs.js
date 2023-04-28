const db = require('../db/dbConfig.js');

//index query
const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs;");
    return allSongs;
  } catch (error) {
    return error;
  }
}

//show query
const getOneSong = async (id) => {
  try {
    const song = await db.one("SELECT * FROM songs WHERE id=$1;", id);
    return { success: true, payload: song };
  } catch (error) {
    return { success: false, payload: error };
  }
}

//edit query
const editSong = async (id, songToEdit) => {
  const { name, artist, album, time, is_favorite } = songToEdit;

  try {
    const editedSong = await db.one("UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING *;", [name, artist, album, time, is_favorite, id]);
    return { success: true, payload: editedSong };
  } catch (error) {
    return { success: false, payload: error };
  }
}

//create query
const createSong = async (songToAdd) => {
  const { name, artist, album, time, is_favorite } = songToAdd;

  try {
    const newSong = await db.one("INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *;", [name, artist, album, time, is_favorite]);
    return newSong;
  } catch (error) {
    return error;
  }
}

//delete query
const deleteSong = async (id) => {
  try {
    const deletedBookmark = await db.one("DELETE FROM songs WHERE id=$1 RETURNING *;", id);
    return { success: true, payload: deletedBookmark };
  } catch (error) {
    return { success: false, payload: error };
  }
}


module.exports = {
  getAllSongs,
  getOneSong,
  editSong,
  createSong,
  deleteSong
};