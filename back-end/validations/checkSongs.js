
const validateRequests = (req, res, next) => {
  if(req.body && req.body.name && req.body.artist && (typeof req.body.is_favorite === "string" || typeof req.body.is_favorite === "boolean")) {
    return next();
  } else  {
    res.status(400).json({error: "Body is missing information or body is not present at all"});
  }
}

const validateId = (req, res, next) => {
  if (req.params.id) {
    return next();
  } else {
    res.status(404).json({error: "Invalid ID number"});
  }
}

module.exports = {
  validateRequests, 
  validateId
}