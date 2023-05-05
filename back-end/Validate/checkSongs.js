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
    res.status(400).json({ error: "Invalid id " });
  }
};

module.exports = { checkRequest, checkId };
