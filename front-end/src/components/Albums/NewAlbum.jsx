import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function NewAlbum() {
  const [newAlbum, setNewAlbum] = useState({
    name: "",
    artist: "",
    release_date: "",
    is_favorite: false
  });
  const navigate = useNavigate();

  async function addAlbum() {
    await axios
      .post(`${API}/albums`, newAlbum)
      .then(() => navigate("/albums"))
      .catch((error) => console.warn("Error: POST", error))
  }

  function handleTextChange(event) {
    setNewAlbum({ ...newAlbum, [event.target.id]: event.target.value });
  };

  function handleCheckboxChange(event) {
    setNewAlbum({ ...newAlbum, [event.target.id]: event.target.checked });
  };

  function handleSubmit(event) {
    event.preventDefault();
    addAlbum();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Album Name: </label>
          <input
            id="name"
            type="text"
            value={newAlbum.name}
            onChange={handleTextChange}
            required
          />
        </div >
        <div>
          <label htmlFor="artist">Artist: </label>
          <input
            id="artist"
            type="text"
            value={newAlbum.artist}
            onChange={handleTextChange}
            required
          />
        </div>
        <div>
          <label htmlFor="release_date">Release Date: </label>
          <input
            id="release_date"
            type="text"
            value={newAlbum.release_date}
            onChange={handleTextChange}
          />
        </div>
        <div>
          <label htmlFor="is_favorite">Favorite: </label>
          <input
            id="is_favorite"
            type="checkbox"
            checked={newAlbum.is_favorite}
            onChange={handleCheckboxChange}
          />
        </div>

        <div>
          <button>
            <Link to={`/albums`}>Back</Link>
          </button>
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewAlbum;