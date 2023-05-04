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
    const aSong = await db.one("SELECT * FROM songs WHERE id=$1", id);
    return aSong;
  } catch (error) {
    return error;
  }
};

const newSong = async (songToAdd) => {
  try {
    const addedSong = await db.one(
      "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        songToAdd.name,
        songToAdd.artist,
        songToAdd.album,
        songToAdd.time,
        songToAdd.is_favorite,
      ]
    );
    return addedSong;
  } catch (err) {
    return err;
  }
};

module.exports = { getAllSongs, getASong, newSong };
