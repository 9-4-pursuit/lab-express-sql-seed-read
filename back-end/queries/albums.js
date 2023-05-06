const db = require('../db/dbConfig.js');

//index query
const getAllAlbums = async (albumQuery) => {
  let queryString = "SELECT * FROM albums";

  if (Object.keys(albumQuery).length) {
    if (albumQuery.order) {
      if (albumQuery.order === "asc") {
        queryString += " ORDER BY name ASC";
      } else if (albumQuery.order === "desc") {
        queryString += " ORDER BY name DESC";
      } else {
        return { success: false, payload: "Invalid 'order' value." };
      }
    } else {
      return { success: false, payload: "Invalid filter request." };
    }
  }

  try {
    const allAlbums = await db.any(queryString + ";");
    return { success: true, payload: allAlbums };
  } catch (error) {
    return { success: false, payload: error };
  }
}

//show query
const getOneAlbum = async (id) => {
  try {
    const album = await db.one("SELECT * FROM albums WHERE id=$1;", id);
    return { success: true, payload: album };
  } catch (error) {
    return { success: false, payload: error };
  }
}

//edit query
const editAlbum = async (id, albumToEdit) => {
  const { name, artist, release_date, is_favorite } = albumToEdit;

  try {
    const editedAlbum = await db.one("UPDATE albums SET name=$1, artist=$2, release_date=$3, is_favorite=$4 WHERE id=$5 RETURNING *;", [name, artist, release_date, is_favorite, id]);
    return { success: true, payload: editedAlbum };
  } catch (error) {
    return { success: false, payload: error };
  }
}

//create query
const createAlbum = async (albumToAdd) => {
  const { name, artist, release_date, is_favorite } = albumToAdd;

  try {
    const newAlbum = await db.one("INSERT INTO albums (name, artist, release_date, is_favorite) VALUES ($1, $2, $3, $4) RETURNING *;", [name, artist, release_date, is_favorite]);
    return newAlbum;
  } catch (error) {
    return error;
  }
}

//delete query
const deleteAlbum = async (id) => {
  try {
    const deletedBookmark = await db.one("DELETE FROM albums WHERE id=$1 RETURNING *;", id);
    return { success: true, payload: deletedBookmark };
  } catch (error) {
    return { success: false, payload: error };
  }
}


module.exports = {
  getAllAlbums,
  getOneAlbum,
  editAlbum,
  createAlbum,
  deleteAlbum
};