

const checkRequest = (req, res, next) => {
    if (req.body.name && req.body.artist) {
        next();
    } else {
        res.status(400).json({ error: "The song has missing or invalid information."})
    }
}

module.exports = {
    checkRequest
}