const checkRequest = (req, res, next) => {
  const { title, artist, is_favorite } = req.body;
  if (title && artist && (is_favorite === true || is_favorite === false)) {
    return next();
  } else {
    res.status(400).json({
      error: "Title, artist, and is_favorite fields are required.",
    });
  }
};

const checkId = (req, res, next) => {
  if (req.params.id) {
    return next();
  } else {
    res.status(400).json({
      error: "ID is missing.",
    });
  }
};

module.exports = {
  checkRequest,
  checkId,
};
