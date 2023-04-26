const db = require ('../db/dbConfig');
//index query
const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM songs");
        return allSongs;

    } catch (error){
        return error;
    }
};

//show query
const getASong = async (id) =>{
    try {

        const Song = await db.one("SELECT * FROM songs WHERE id=$1", id)
        return song

    }catch (error){
        return error;
    }
};

//create query
const createSong = async (songToAdd) => {
    // const {name, url, category, is_favorite} = songToAdd;
  try {
      const newSong = await db.one("INSERT INTO songs (name, url, category, is_favorite) VALUES ($1, $2, $3, $4) RETURNING *", [songToAdd.name, songToAdd.url, songToAdd.category, songToAdd.is_favoite])
      return newSong;
  }catch (error) {
      return error
  }
}

//delete query

const deleteSong = async (id) =>{
  try {
      const deletedSong = await db.one("DELETE FROM songs WHERE id=$1 RETURNING *", id)
      return deletedSong
  }catch (error) {
      return error
  }
}


module.exports = {
    getAllSongs,
    getASong,
    createSong,
    deleteSong
}