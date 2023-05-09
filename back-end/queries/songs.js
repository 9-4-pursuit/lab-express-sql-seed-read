const db = require("../db/dbConfig.js");

//const { getAllSongs, getOneSong, createASong, updateSong, deleteSong } = require("../queries/songs")

//INDEX
const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (error) {
  }
};

//ONE
const getOneSong = async (id) => {
  try {
    const oneSong = await db.oneOrNone("SELECT * FROM songs WHERE id=$1", id);
    return oneSong;
  } catch (error) {
    return { error: error }
  }
};

//CREATE
const createASong = async ({ name, artist, album, time, is_favorite }) => {
  try {
    const newSong = await db.one(
      "INSERT INTO songs (name, artist, album, time, is_favorite VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, artist, album, time, is_favorite]
    );
    return newSong;
  } catch (error) {
    return error;
  }
};

//DELETE
const deleteSong = async (id) => {
  try {
    const deletedSong = await db.one(
      "DELETE FROM songs WHERE id = $1 RETURNING *", id);
    return deletedSong;
  } catch (error) {
    return error;
  }
};

//UPDATE
const updateSong = async (id, song) => {
  try {
    const { name, artist, album, title, is_favorite } = song;
    const updatedSong = await db.one("UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING *", [name, artist, album, time, is_favorite, id]);
    return updatedSong;
  } catch (error) {
    throw error;
  }
};

// const { getAllSongs, getOneSong, createASong, updateSong, deleteSong } = require("../queries/songs"
// )
module.exports = {
  getAllSongs,
  getOneSong,
  createASong,
  updateSong,
  deleteSong
};