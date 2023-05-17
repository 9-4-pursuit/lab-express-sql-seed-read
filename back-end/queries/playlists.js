const db = require('../db/dbConfig')

const getAllPlaylist = async () => {
  const allPlaylist = await db.any('SELECT * FROM playlist')
  if (allPlaylist) {
    return allPlaylist
  }
  return null
}
const getOnePlaylist = async id => {
  const playlist = await db.any('SELECT * FROM playlist WHERE id=$1', id)
  if (playlist) {
    return playlist
  }
  return null
}
const updatePlaylist = async (id, playlist) => {
  const updatedPlaylist = await dn.one(
    'UPDATE playlist SET name=$1, is_favorite=$2 WHERE id=$3',
    [playlist.name, playlist.is_favorite, id]
  )
  if (playlist.removedSongs.length > 0) {
    playlist.removedSongs.forEach(async song_id => {
      await db.one(
        'DELETE FROM songs WHERE id=$1 AND playlist_id=$2 RETURNING *',
        song_id,
        id
      )
    })
    return updatedPlaylist
  } else {
    return updatedPlaylist
  }
}

const createPlaylist = async playlist => {
  const newPlaylist = await db.one(
    'INSERT INTO playlist (name, is_favorite) VALUES ($1,$2) RETURNING * ',
    [playlist.name, playlist.is_favorite]
  )
  if (newPlaylist) {
    return newPlaylist
  }
  return null
}
const deletePlaylist = async id => {
  const deletedPlaylist = await db.one('DELETE FROM playlist WHERE id=$1', [id])
  return deletedPlaylist 
}
module.exports = {
    getAllPlaylist,
    getOnePlaylist,
    updatePlaylist,
    createPlaylist,
    deletePlaylist
}
