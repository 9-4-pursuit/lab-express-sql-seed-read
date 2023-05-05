const checkRequest = (req, res, next) => {
  if (req.body && req.body.name && req.body.artist) {
    return next();
  } else {
    res
      .status(400)
      .json({ error: "Body is issing information or body is not present" });
  }
};

const checkId = (req, res, next) => {
  if (req.params.id) {
    return next();
  } else {
    res
      .status(400)
      .json({ error: "Body is issing information or body is not present" });
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

module.exports = { checkRequest, checkId, validateURL };
