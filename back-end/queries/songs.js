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
    const song = await db.one("SELECT * FROM songs WHERE id=$1", id);
    return song;
  } catch (error) {
    return error;
  }
};

const createASong = async (newSong) => {
  try {
    const addedSong = await db.one(
      "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES($1,$2,$3,$4,$5) RETURNING *",
      [
        newSong.name,
        newSong.artist,
        newSong.album,
        newSong.time,
        newSong.is_favorite,
      ]
    );
    return addedSong;
  } catch (error) {
    return error;
  }
};

const updateSong = async (id, body) => {
  const { name, artist, album, time, is_favorite } = body;
  try {
    const updatedSong = await db.one(
      "UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING *",
      [name, artist, album, time, is_favorite, id]
    );
    return updatedSong;
  } catch (error) {
    return error;
  }
};

const deleteSong = async(id) => {
    try {
        const deletedSong = await db.one(
           'DELETE FROM songs WHERE id=$1 RETURNING *' , id
        )
        return deletedSong
    } catch (error) {
        return error
    }
}

module.exports = {
  getAllSongs,
  getASong,
  createASong,
  updateSong,
  deleteSong
};
