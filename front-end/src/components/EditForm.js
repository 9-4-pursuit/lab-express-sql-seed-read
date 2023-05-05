import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../CSS/Edit.css";

function EditForm() {
  const [editSong, setEditSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  let navigate = useNavigate();
  const { id } = useParams();

  function handleTextChange(event) {
    setEditSong({ ...editSong, [event.target.id]: event.target.value });
  }
  function handleCheckboxChange(event) {
    setEditSong({ ...editSong, is_favorite: event.target.checked });
  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/songs/${id}`)
      .then((res) => {
        setEditSong(res.data);
      })
      .catch((error) => {
        console.log("catch", error);
      });
  }, [id]);

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .put(`${process.env.REACT_APP_API_URL}/songs/${id}`, editSong)
      .then(() => {
        navigate(`/songs/${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }

return (
    <div className="song-form">
      <h2 className="song-form-title">Add Song</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Song Name:</label>
          <input
            id="name"
            type="text"
            required
            autoFocus
            placeholder="Enter the name of song"
            title="Name of the Song is required"
            onChange={handleTextChange}
            value={editSong.name}
          />
        </div>

        <div className="form-group">
          <label htmlFor="artist">Artist Name:</label>
          <input
            id="artist"
            type="text"
            required
            placeholder="Enter the name of artist"
            title="Artist is required"
            onChange={handleTextChange}
            value={editSong.artist}
          />
        </div>

        <div className="form-group">
          <label htmlFor="album">Album Name:</label>
          <input
            id="album"
            type="text"
            placeholder="Enter the name of album"
            onChange={handleTextChange}
            value={editSong.album}
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            id="time"
            type="text"
            placeholder="Enter the duration of the song"
            onChange={handleTextChange}
            value={editSong.time}
          />
        </div>

        <div className="form-group">
          <label htmlFor="is_favorite">Favorite:</label>
          <input
            id="is_favorite"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={editSong.is_favorite}
          />
        </div>

        <div className="button-group">
          <button type="submit">Save</button>
          <button type="button" onClick={() => navigate("/songs")}>
            Cancel
          </button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  );
}

export default EditForm;