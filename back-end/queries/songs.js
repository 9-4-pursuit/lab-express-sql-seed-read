const db = require("../db/dbConfig")

const getAllBookmarks = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM songs")
        return allSongs
    } catch (error) {
        return error
    }
}


module.exports = {
    getAllBookmarks
}