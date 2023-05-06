import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import AlbumSongs from "./AlbumSongs.jsx";
const API = process.env.REACT_APP_API_URL;

function AlbumDetails() {
  const [theAlbum, setTheAlbum] = useState([]);
  const [albumSongs, setAlbumSongs] = useState([]);
  const { name, artist, release_date, is_favorite } = theAlbum;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getAlbumsById();
    getSongsById();
  }, [id]);

  async function getAlbumsById() {
    await axios
      .get(`${API}/albums/${id}`)
      .then(response => setTheAlbum(response.data))
      .catch(error => console.error("Error: GET", error))
  }

  async function getSongsById() {
    await axios
      .get(`${API}/albums/${id}/songs`)
      .then(response => setAlbumSongs(response.data))
      .catch(error => console.error("Error: GET", error))
  }

  async function handleDelete() {
    if (window.confirm("Are you sure you want to delete this album?")) {
      await axios
        .delete(`${API}/albums/${id}`)
        .then(() => navigate('/albums'))
        .catch(error => console.error("Error: DELETE", error))
    }
  }

  return (
    <div className="Album-Details">
      <p>
        {
          is_favorite
          ? "⭐️ "
          : ""
        }
        {name}
      </p>
      <p>by {artist}</p>
      <p>Released on: {release_date}</p>

      <button><Link to="/albums">Back</Link></button>
      <button><Link to={`/albums/${id}/edit`}>Edit</Link></button>
      <button onClick={handleDelete}>Delete</button>

      {
        albumSongs.length > 0 && (
          <section>
            <table>
              <thead>
                <tr>
                  <th>Fav</th>
                  <th>#</th>
                  <th>Name</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                {
                  albumSongs.map((song, index) => {
                    return <AlbumSongs key={song.id} song={song} index={index} />
                  })
                }
              </tbody>
            </table>
          </section>
        )
      }

    </div>
  );
}

export default AlbumDetails;