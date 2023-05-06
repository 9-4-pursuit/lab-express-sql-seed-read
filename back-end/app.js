const express = require("express");
const app = express();
const cors = require("cors");
const songController = require("./controllers/songController.js");
// const { validateURL } = require('./validations/checkSongs.js');

// app.use(validateURL);
app.use(express.json());
app.use(cors());


app.use("/songs", songController);
app.get("/", (req, res) => {
    res.send('Welcome to Tuner Backend');
});
app.get("/Error404", (req, res) => {
    res.send("404 Error; route does not exist.")
})
app.get("*", (req, res) => {
    res.redirect('/Error404');
})
// app.get("*", (req, res) => {
//     res.status(404).json({error: "Page not found"})
// });

module.exports = app;