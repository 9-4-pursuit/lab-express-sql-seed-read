import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function EditAlbum() {
  const [editAlbum, setEditAlbum] = useState({
    name: "",
    artist: "",
    release_date: "",
    is_favorite: false
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getById() {
      await axios
        .get(`${API}/albums/${id}`)
        .then((response) => setEditAlbum(response.data))
        .catch((error) => console.error("Error: GET", error))
    }
    getById();
  }, [id]);

  async function updateTxn() {
    await axios
      .put(`${API}/albums/${id}`, editAlbum)
      .then((response) => {
        setEditAlbum(response.data);
        navigate(`/albums`);
      })
      .catch((error) => console.warn("Error: PUT", error))
  }

  function handleTextChange(event) {
    setEditAlbum({ ...editAlbum, [event.target.id]: event.target.value });
  };

  function handleCheckboxChange(event) {
    setEditAlbum({ ...editAlbum, [event.target.id]: event.target.checked });
  };

  function handleSubmit(event) {
    event.preventDefault();
    updateTxn();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Album Name: </label>
          <input
            id="name"
            type="text"
            value={editAlbum.name}
            onChange={handleTextChange}
            required
          />
        </div >
        <div>
          <label htmlFor="artist">Artist: </label>
          <input
            id="artist"
            type="text"
            value={editAlbum.artist}
            onChange={handleTextChange}
            required
          />
        </div>
        <div>
          <label htmlFor="release_date">Release Date: </label>
          <input
            id="release_date"
            type="text"
            value={editAlbum.release_date}
            onChange={handleTextChange}
          />
        </div>
        <div>
          <label htmlFor="is_favorite">Favorite: </label>
          <input
            id="is_favorite"
            type="checkbox"
            checked={editAlbum.is_favorite}
            onChange={handleCheckboxChange}
          />
        </div>

        <div>
          <button>
            <Link to={`/albums/${id}`}>Back</Link>
          </button>
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditAlbum;