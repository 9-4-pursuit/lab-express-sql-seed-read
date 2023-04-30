//What we are writing is Middleware -- its going to check to make the request from JS to check the origin request
//This is Custom --> and is a separation of concerns

const checkRequest = (req, res, next) => {
  if (
    req.body &&
    req.body.name &&
    req.body.artist &&
    (req.body.is_favorite === "true" || "false")
  ) {
    return next();
  } else {
    res.status(400).json({
      error: "Body is missing information or body is not present at all",
    });
  }
};

const checkId = (req, res, next) => {
  if (req.params.id) {
    return next();
  } else {
    res.status(400).json({
      error: "Body is missing information or body is not present at all",
    });
  }
};

const validateURL = (req, res, next) => {
  if (
    req.body.url.substring(0, 7) === "http://" ||
    req.body.url.substring(0, 8) === "https://"
  ) {
    return next();
  } else {
    res
      .status(400)
      .json({ error: `You forgot to start your url with http:// or https://` });
  }
};

module.exports = {
  checkRequest,
  checkId,
  validateURL,
};
