const express = require('express')
const songs = express.Router({mergeParams:true})
const {
  getAllSongs,
  getASong,
  addASong,
  deleteSong,
  updateSong,
} = require('../queries/songs')
const {
  checkRequest,
  checkId,
  validateUrl,
} = require('../validations/checkSongs')



songs.get('/', async (req, res) => {
if(req.params.playlist_id){
  const allSongs = await getAllSongs(req.query, req.params.playlist_id)
  if (allSongs) {
    res.status(200).json(allSongs)
  } else {
    res.status(500).json({ error: 'Server Error:  Songs not found at songController.js' })
  }
}else{
  const allSongs = await getAllSongs(req.query)
  if (allSongs) {
    res.status(200).json(allSongs)
  } else {
    res.status(500).json({ error: 'Server Error:  Songs not found at songController.js' })
  }
}
})
songs.get('/:id', checkId, async (req, res) => {
  const { id } = req.params
  const song = await getASong(id)
  console.log(song)
  if (song.artist) {
    res.status(200).json(song)
  } else {
    res.status(404).json({ error: 'Server Error: Song not found at songController.js' })
  }
})

songs.post('/', checkRequest, async (req, res) => {
  const addedSong = await addASong(req.body)
  if(addedSong.artist) {
    res.status(200).json(addedSong)
  }else{
    res.status(400).json({ error: 'server error: Song add failed at songController.js' })
  }
})

songs.put('/:id', async (req, res) => {
  const { id } = req.params
  const editedSong = await updateSong(id, req.body)
  res.status(200).json(editedSong)
})

songs.delete('/:id', checkId, async (req, res) => {
  const { id } = req.params
  const deletedSong = await deleteSong(id)
  if (deletedSong.album) {
    res.status(200).json(deletedSong)
  } else {
    res.status(404).json({ error: 'Server Error: Song delete failed at songController.js ' })
  }
})
module.exports = songs
