const express = require("express");
const app = express();
const cors = require('cors')
const songsController = require("./controllers/songController")

app.use(express.json())
app.use(cors())

app.use('/songs', songsController)

app.get('/', (req, res) => {
    res.send("Welcome to the Songs App!")
})

app.get('*', (req, res) => {
    res.status(404).json({error: "Not Found"})
})


module.exports = app;





