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

module.exports = { getAllSongs, getASong };
