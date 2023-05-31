//Middleware
const checkRequest = (req, res, next) => {
    if (req.body && req.body.name &&  req.body.artist && req.body.time && 'is_favorite' in req.body) {
        return next();
    } else {
        res.status(400).json({error: "Body is missing information or body is not present."})
    }
}

const checkId = (req, res, next) => {
    console.log(req.body)
    if(req.params.id) {
        return next()
    } else {
        res.status(404).json({error: "Body is missing information or body is not present."})
    }
}

module.exports={
    checkRequest,
    checkId
}