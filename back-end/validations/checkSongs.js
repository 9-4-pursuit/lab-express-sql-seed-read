//middleware

const checkId = (req, res, next) => {
  if (req.params.id) {
    return next();
  } else {
    res.status(400).json({ error: "Body is missing the id." });
  }
}

const checkRequest = (req, res, next) => {
  if (
    req.body &&
    req.body.name &&
    req.body.artist &&
    (typeof req.body.is_favorite === "boolean" ||
      (req.body.is_favorite.toLowerCase() === "true" ||
      req.body.is_favorite.toLowerCase() === "false")
    )
  ) {
    return next();
  } else {
    res.status(400).json({ error: "Body has either incorrect or missing information, or Body is not present at all." });
  }
}


module.exports = {
  checkId,
  checkRequest
};