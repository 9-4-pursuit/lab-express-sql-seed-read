//Middleware
const checkRequest = (req, res, next) => {
    if (req.body && req.body.name &&  req.body.artist && req.body.album && req.body.time && 'req.body.is_favorite' in req.body) {
        return next();
    } else {
        res.status(400).json({error: "Body is missing information or body is not present."})
    }
}

module.exports={
    checkRequest
}