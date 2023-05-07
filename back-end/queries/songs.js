const db = require('../db/dbConfig')
const getAllSongs = async (queries, id) => {
  try {
    // let allSongs
    // if (queries) {
    //   if (queries.order === 'asc') {
    //     allSongs = await db.any('SELECT * FROM songs ORDER BY name')
    //   } else if (queries.order === 'desc') {
    //     allSongs = await db.any('SELECT * FROM songs ORDER BY name DESC')
    //   } else if (queries.is_favorite === 'true') {
    //     allSongs = await db.any('SELECT * FROM songs WHERE is_favorite=true')
    //   } else if (queries.is_favorite === 'false') {
    //     allSongs = await db.any('SELECT * FROM songs WHERE is_favorite=false')
    //   }
    // } else {
     const allSongs = await db.any('SELECT * FROM songs WHERE playlist_id=$1', id)
    // }
    return allSongs
  } catch (error) {
    return error
  }
}
const getASong = async id => {
  try {
    const oneSong = await db.one('SELECT * FROM songs WHERE id=$1', id)
    return oneSong
  } catch (error) {
    return error
  }
}
const addASong = async addedSong => {
  try {
    const newSong = await db.one(
      'INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1,$2,$3,$4,$5) RETURNING *',
      [
        addedSong.name,
        addedSong.artist,
        addedSong.album,
        addedSong.time,
        addedSong.is_favorite,
      ]
    )
    return newSong
  } catch (error) {
    return error
  }
}
const deleteSong = async id => {
  try {
    const deletedSong = await db.one(
      'DELETE FROM songs WHERE id=$1 RETURNING *',
      id
    )
    return deletedSong
  } catch (error) {
    return error
  }
}
const updateSong = async (id, song) => {
  try {
    const updatedSong = db.one(
      'UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING *',
      [song.name, song.artist, song.album, song.time, song.is_favorite, id]
    )
    return updatedSong
  } catch (error) {
    return error
  }
}

module.exports = {
  getAllSongs,
  getASong,
  addASong,
  deleteSong,
  updateSong,
}
