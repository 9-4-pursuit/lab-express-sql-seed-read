//Middleware

const checkRequest = (req, res, next) => {
    if(req.body && req.body.name && req.body.artist) {
        return next();
    } else {
        res.status(400).json({error: "Body is missing information"})
    }
}

const checkId = (req, res, next) => {
    if(req.params.id) {
        return next()
    } else {
        res.status(400).json({error: "Body is missing information"})
    }
}

const validateURL = (req, res, next) => {
    if(
        req.body.url.substring(0, 7) === "http://" ||
        req.body.url.substring(0, 8) === "https://"
    ) {
        return next()
    } else {
        res.status(400).json({error: "You forgot to start your url correctly"})

    }
}

module.exports = {
    checkRequest,
    checkId,
    validateURL
}