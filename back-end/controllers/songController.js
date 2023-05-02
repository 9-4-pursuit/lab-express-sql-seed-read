const express = require("express")
const songs = express.Router()
const { getAllSongs, getASong, createSong, deleteSong, updateSong } = require('../queries/songs')
const { checkRequest, validateURL, checkId } = require('../validations/checkSongs')

//index route
songs.get("/", async (req, res) => {
   const allSongs = await getAllSongs();

   if (allSongs) {
    res.status(200).json(allSongs)
   }else{
    res.status(404).json({error: 'Server Error'})
   }
})

//show route
songs.get('/:id', async (req, res)=>{
    const { id } = req.params;
    const song = await getASong(id);

    if (song.album) {
        res.status(200).json(song);
    }else {
        res.status(404).json({error: 'Server Error'})
    }
})

//create route
songs.post("/", checkRequest, async (req, res) =>{
    
    const addedSong = await createSong(req.body)
    if(addedSong.artist){
        res.status(200).json(addedSong)
    }else{

        res.status(404).json({error: error})
    }
    }
)

//delete route


songs.delete("/:id", async (req, res) => { // maverick edition
    const { id } = req.params;
    const deletedSong = await deleteSong(id);
    if (deletedSong.error) {
        res.status(404).json({ error: deletedSong.error });
    } 
    else {
        res.status(200).json(deletedSong);
    }
});

//update ruote

songs.put("/:id", async (req, res) => {
// checkRequest,   
    const {id} = req.params;
    const {body} = req

    try {
        const updatedSong = await updateSong(id, body)
        res.status(200).json(updatedSong)
    } catch (error) {
        res.status(404).json({error: error})
    }
 })





module.exports = songs;