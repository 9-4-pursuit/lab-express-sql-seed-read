const express = require('express')
const app = express()
const cors = require('cors')
const songsController = require('./controllers/songController')
const playlistController =require('./controllers/playlistController')
app.use(express.json())
app.use(cors())

app.use('/songs', songsController)

app.use('/playlist', playlistController)
app.get('/', (_, res)=>{
    res.status(200).send('Welcome to Tuner')
})

app.get('*', (_, res)=>{
    res.status(404).send('Page not Found')
})
module.exports = app