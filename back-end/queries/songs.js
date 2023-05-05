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

const updateSong = async (id, song) => {
  const { name, artist, album, time, is_favorite } = song;
  try {
    const updatedBookmark = await db.one(
      "UPDATE songs SET name=$1, artist=$2, album=$3, is_favorite=$4, time=$5 WHERE id=$6 RETURNING *",
      [name, artist, album, is_favorite, time, id]
    );
    return updatedBookmark;
  } catch (error) {
    return error;
  }
};

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

module.exports = { getAllSongs, getASong, newSong, updateSong, deleteSong };
