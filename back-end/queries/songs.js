const db = require("../db/dbConfig");
const songs = express.Router();

const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (error) {
    return error;
  }
};

module.exports = getAllSongs;
