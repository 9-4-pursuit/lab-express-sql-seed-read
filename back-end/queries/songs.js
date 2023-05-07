const db = require ('../db/dbConfig');
//index query
const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM songs;");
        return allSongs;

    } catch (error){
        return error;
    }
};

//show query
const getASong = async (id) =>{
    try {

        const song = await db.one("SELECT * FROM songs WHERE id=$1;", id)
        return song

    }catch (error){
        return error;
    }
};

//create query
const createSong = async (songToAdd) => {
    // const {name, url, category, is_favorite} = songToAdd;
  try {
      const newSong = await db.one("INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *;", [songToAdd.name, songToAdd.artist, songToAdd.album, songToAdd.time, songToAdd.is_favorite])
      return newSong;
  }catch (error) {
      return error
  }
}

//delete query

const deleteSong = async (id) =>{
    
  try {
    const songExists = await db.oneOrNone("SELECT id FROM songs WHERE id=$1", id)
    if (!songExists) {
        return { error: `Song with ID ${id} does not exists in db` }
    }
      const deletedSong = await db.one("DELETE FROM songs WHERE id=$1 RETURNING *;", id)
      return deletedSong;
  }catch (error) {
      return error
  }
}

// update query

const updateSong = async (id, song) => {
    try {
        const updatedSong = await db.one("UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING *;", [song.name, song.artist, song.album, song.time, song.is_favorite, id]);
        return updatedSong;
    } catch (error) {
        return error;
    };

}




module.exports = {
    getAllSongs,
    getASong,
    createSong,
    deleteSong,
    updateSong
}