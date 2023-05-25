import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function EditSong() {
  const [editSong, setEditSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getById() {
      await axios
        .get(`${API}/songs/${id}`)
        .then((response) => setEditSong(response.data))
        .catch((error) => console.error("Error: GET", error))
    }
    getById();
  }, [id]);

  async function updateTxn() {
    await axios
      .put(`${API}/songs/${id}`, editSong)
      .then((response) => {
        setEditSong(response.data);
        navigate(`/songs`);
      })
      .catch((error) => console.warn("Error: PUT", error))
  }

  function handleTextChange(event) {
    setEditSong({ ...editSong, [event.target.id]: event.target.value });
  };

  function handleCheckboxChange(event) {
    setEditSong({ ...editSong, [event.target.id]: event.target.checked });
  };

  function handleSubmit(event) {
    event.preventDefault();
    updateTxn();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Song Name: </label>
          <input
            id="name"
            type="text"
            value={editSong.name}
            onChange={handleTextChange}
            required
          />
        </div >
        <div>
          <label htmlFor="artist">Artist: </label>
          <input
            id="artist"
            type="text"
            value={editSong.artist}
            onChange={handleTextChange}
            required
          />
        </div>
        <div>
          <label htmlFor="album">Album: </label>
          <input
            id="album"
            type="text"
            value={editSong.album}
            onChange={handleTextChange}
          />
        </div>
        <div>
          <label htmlFor="time">Time: </label>
          <input
            id="time"
            type="text"
            value={editSong.time}
            onChange={handleTextChange}
          />
        </div>
        <div>
          <label htmlFor="is_favorite">Favorite: </label>
          <input
            id="is_favorite"
            type="checkbox"
            checked={editSong.is_favorite}
            onChange={handleCheckboxChange}
          />
        </div>

        <div>
          <button>
            <Link to={`/songs/${id}`}>Back</Link>
          </button>
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditSong;
