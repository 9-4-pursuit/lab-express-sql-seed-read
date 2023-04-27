// This is middleware.
const checkRequest = (req, res, next) => {
    if (req.body.name && req.body.artist && (typeof req.body.is_favorite === "boolean")) {
        return next();
    } else {
        res.status(400).json({ error: "Name and artist required.  is_favorite must be boolean." });
    }
};

const checkID = (parameterID, databaseID) => {
    if (Number(parameterID) === Number(databaseID)) {
        return true;
    } else {
        return false;
    }
};
// Only really the MANDATORY fields, otherwise . . .
// const checkID = (req, res, next) => {
//     console.log("checkID", req.params.id, "body.id", req.body, "id.id", req);
//     if (Number(req.params.id) === Number(req.body.id)) {
//         return next();
//     } else {
//         res.redirect('/Error404');
//     }
// };

// const checkID = (req, res, next) => {
//     if (Number(req.params.id) === Number(req.body.id)) {
//         return next();
//     } else {
//         res.redirect('/Error404');
//     }
// };



// const validateURL = (req, res, next) => {
//     console.log("protocol", req.protocol)
//     if (
//         req.protocol.substring(0, 4) === "http" ||
//         req.protocol.substring(0, 5) === "https"
//     ) {
//         return next();
//     } else {
//         res.status(400).json({error: "Please start url with http:// or https://"})
//     }
// }

module.exports = { checkRequest, checkID };