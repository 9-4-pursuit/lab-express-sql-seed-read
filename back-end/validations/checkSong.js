const checkRequest = (req, res, next) => {
  if (
    req.body &&
    req.body.name &&
    req.body.artist &&
    req.body.album &&
    req.body.time &&
    typeof req.body.is_favorite === "boolean"
  ) {
    res.status(200);
    next();
  } else {
    res.status(400).json({error: "Body is missing information or body is not present at all"});
  }
};


const checkId = (req, res, next) => {
  if (req.params.id) {
    res.status(200);
    next();
  } else {
    res
      .status(400)
      .json({
        error: "Body is missing information or body is not present at all",
      });
  }
};

module.exports = {
  checkRequest,
  checkId,
};
