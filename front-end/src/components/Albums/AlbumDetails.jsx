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

    getAlbumsById();
    getSongsById();
  }, [id]);

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

      <button>
        <Link to="/albums">Back</Link>
      </button>
      <button>
        <Link to={`/albums/${id}/edit`}>Edit</Link>
      </button>
      <button onClick={handleDelete}>
        Delete
      </button>

      {
        albumSongs.length > 0 && (
          <div>
            <button
              className="py-2 px-2 rounded-md bg-blue-100 border border-transparent text-sm font-semibold content-end text-blue-500 hover:text-blue-700 hover:bg-blue-200"
            >
              <Link to={`/songs/new`}>New Song</Link>
            </button>

            <section className="py-4">
              <table className="min-w-full divide-y border border-gray-300 divide-gray-200 dark:divide-gray-700 text-center">
                <thead className="border border-b-gray-300 bg-sky-200 font-medium">
                  <tr>
                    <th className="px-6 py-2 text-m font-medium text-gray-600 uppercase">Fav</th>
                    <th className="px-6 py-2 text-m font-medium text-gray-600 uppercase">#</th>
                    <th className="px-6 py-2 text-m font-medium text-gray-600 uppercase">Name</th>
                    <th className="px-6 py-2 text-m font-medium text-gray-600 uppercase">Duration</th>
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
          </div>
        )
      }

    </div>
  );
}

export default AlbumDetails;