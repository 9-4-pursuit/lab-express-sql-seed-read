import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function NewSong() {
  const [newSong, setNewSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false
  });
  const navigate = useNavigate();

  async function addSong() {
    await axios
      .post(`${API}/songs`, newSong)
      .then(() => navigate("/songs"))
      .catch((error) => console.warn("Error: POST", error))
  }

  function handleTextChange(event) {
    setNewSong({ ...newSong, [event.target.id]: event.target.value });
  };

  function handleCheckboxChange(event) {
    setNewSong({ ...newSong, [event.target.id]: event.target.checked });
  };

  function handleSubmit(event) {
    event.preventDefault();
    addSong();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Song Name: </label>
          <input
            id="name"
            type="text"
            value={newSong.name}
            onChange={handleTextChange}
            required
          />
        </div >
        <div>
          <label htmlFor="artist">Artist: </label>
          <input
            id="artist"
            type="text"
            value={newSong.artist}
            onChange={handleTextChange}
            required
          />
        </div>
        <div>
          <label htmlFor="album">Album: </label>
          <input
            id="album"
            type="text"
            value={newSong.album}
            onChange={handleTextChange}
          />
        </div>
        <div>
          <label htmlFor="time">Time: </label>
          <input
            id="time"
            type="text"
            value={newSong.time}
            onChange={handleTextChange}
          />
        </div>
        <div>
          <label htmlFor="is_favorite">Favorite: </label>
          <input
            id="is_favorite"
            type="checkbox"
            checked={newSong.is_favorite}
            onChange={handleCheckboxChange}
          />
        </div>

        <div>
          <button>
            <Link to={`/songs`}>Back</Link>
          </button>
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewSong;