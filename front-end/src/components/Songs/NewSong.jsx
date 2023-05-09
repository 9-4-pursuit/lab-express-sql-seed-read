import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
      .then(() => navigate(-1))
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
      <h1>MUST CREATE ALBUM FRIST before adding a new song.</h1>
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
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
      <button onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
}

export default NewSong;