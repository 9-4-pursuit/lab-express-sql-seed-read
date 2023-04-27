const validateRequests = (req, res, next) => {
  if(req.body && req.body.name && req.body.artist && (req.body.is_favorite === "true" || "false")) {
    return next();
  } else  {
    res.status(400).json({error: "Body is missing information or body is not present at all"});
  }
}

module.exports = {
  validateRequests
}