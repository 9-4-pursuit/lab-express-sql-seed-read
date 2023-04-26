const db = require("../db/dbConfig.js");

const getAllSongs = async() => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (error) {
    console.log(error);
  }
}

const getOneSong = async (id) => {
  try {
    const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id);
    return oneSong;
  } catch (error) {
    return error;
  }
}

const createSong = async (songToAdd) => {
  const {name, artist, album, time, is_favorite} = songToAdd;

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