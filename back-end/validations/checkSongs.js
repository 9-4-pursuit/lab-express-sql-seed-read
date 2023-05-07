const checkRequest = (req, res, next) => {
  const is_favorite = convertToBool(req.body.is_favorite)
  if (
    req.body.name &&
    req.body.artist &&
    req.body.time &&
    typeof is_favorite === 'boolean'
  ) {
    return next()
  } else {
    res.status(400).json({
      error: 'Body is missing information or body is not present at all',
    })
  }
}


const convertToBool = favorite => {
  if (favorite.toLowerCase() === 'true') {
    return true
  } else if (favorite.toLowerCase() === 'false') {
    return false
  }
}
const checkId = (req, res, next) => {
  if (req.params.id) {
    return next()
  } else {
    res.status(400).json({ error: 'Song not found' })
  }
}

const validateUrl = (req, res, next) => {
  if (
    req.body.url.substring(0, 7) === 'http://' ||
    req.body.url.substring(0, 8) === 'https://'
  ) {
    return next()
  } else {
    res
      .status(400)
      .json({ error: `You forgot to start your url with http:// or https://` })
  }
}

module.exports = {
  checkRequest,
  checkId,
  validateUrl,
}
