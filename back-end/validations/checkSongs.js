

const checkRequest = (req, res, next) => {
    if (req.body.name && req.body.artist) {
        next();
    } else {
        res.status(400).json({ error: "The song has missing or invalid information."})
    }
}

const checkId = (req, res, next) => {
    if (req.params.id) {
        next();
    } else {
        res.status(404).json({ error: "Invalid id."})
    }
}

module.exports = {
    checkRequest,
    checkId
}