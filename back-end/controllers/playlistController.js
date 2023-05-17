const express = require('express')
const playlist = express.Router()
const {getAllPlaylist,getOnePlaylist, updatePlaylist, createPlaylist, deletePlaylist} = require('../queries/playlists')
const songController = require('./songController')

playlist.use('/:playlist_id/songs', songController)

playlist.get('/', async (req,res)=>{
    const allPlaylists = await getAllPlaylist()
    if(allPlaylists){
        res.status(202).json(allPlaylists)
    }else{
        res.status(404).json({error:'Server Error: getAllPlaylist failed at playlistController.js '})
    }
})
playlist.get('/:id', async (req, res)=>{
    const onePlaylist = await getOnePlaylist(req.params.id)
    if(onePlaylist){
        res.status(202).json(onePlaylist)
    }else {
        res.status(404).json({error:'SERVER ERROR: getOnePlaylist failed at playlistController.js '})
    }
})
playlist.post('/', async(req,res)=>{
    const newPlaylist = await createPlaylist(req.body)
    if(newPlaylist){
        res.status(202).json(newPlaylist)
    }else{
        res.status(404).json({error:'SERVER ERROR: createPlaylist failed at playlistController.js'})
    }
})
playlist.put('/:id', async (req,res)=>{
    const updatedPlaylist = await updatePlaylist(req.params.id, req.body)
    if(updatedPlaylist){
        res.status(202).json(updatedPlaylist)
    }else{
        res.status(404).json({error:'SERVER ERROR: updatePlaylist failed at playlistController.js'})
    }
})
playlist.delete('/:id', async (req,res)=>{
    const deletedPlaylist = await deletePlaylist(req.params.id)
    if(deletedPlaylist){
        res.status(202).json(deletedPlaylist)
    }else{
        res.status(404).json({error:'SERVER ERROR: deletePlaylist failed at playlistController.js'})   
    }
})
module.exports = playlist