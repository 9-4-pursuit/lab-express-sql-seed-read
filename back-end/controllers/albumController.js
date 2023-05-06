const express = require('express');
const albums = express.Router();
const songsController = require("./songController.js");
albums.use("/:albumsId/songs", songsController);

const { getAllAlbums, getOneAlbum, editAlbum, createAlbum, deleteAlbum } = require('../queries/albums.js');

//index route
albums.get('/', async (req, res) => {
  const albumQuery = req.query;
  const allAlbums = await getAllAlbums(albumQuery);

  if (allAlbums.success) {
    res.status(200).json(allAlbums.payload);
  } else {
    res.status(500).json({ error: `Error: ${allAlbums.payload}` });
  }
})

//show route
albums.get('/:id', async (req, res) => {
  const { id } = req.params;
  const album = await getOneAlbum(id);

  if (album.success) {
    res.status(200).json(album.payload);
  } else {
    res.status(404).json({ error: `Error: ${album.payload}` });
  }
})

//create route
albums.post('/', async (req, res) => {
  const newAlbum = req.body;
  const addedAlbum = await createAlbum(newAlbum);

  if (addedAlbum) {
    res.status(200).json(addedAlbum);
  } else {
    res.status(400).json({ error: "Error adding a new album." });
  }
})

//update route
albums.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updateAlbum = req.body;
  const updatedAlbum = await editAlbum(id, updateAlbum);

  if (updatedAlbum.success) {
    res.status(200).json(updatedAlbum.payload);
  } else {
    res.status(404).json({ error: `Error: ${updatedAlbum.payload}` });
  }
})

//delete route
albums.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletedAlbum = await deleteAlbum(id);

  if (deletedAlbum.success) {
    res.status(200).json(deletedAlbum.payload);
  } else {
    res.status(404).json({ error: `Error: ${deletedAlbum.payload}` });
  }
})


module.exports = albums;