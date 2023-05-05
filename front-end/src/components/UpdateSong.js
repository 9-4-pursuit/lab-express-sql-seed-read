import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../CSS/Update.css"

function UpdateSong() {
  const [newSong, setNewSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/songs`, newSong)
      .then(() => {
        navigate("/songs");
      })
      .catch((error) => {
        console.log(error);
        navigate("/not-found");
      });
  }

  function handleTextChange(event) {
    setNewSong({ ...newSong, [event.target.id]: event.target.value });
  }

  function handleCheckboxChange(event) {
    setNewSong({ ...newSong, is_favorite: event.target.checked });
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Song Name :{" "}
          </label>
          <input
            id="name"
            type="text"
            required
            autoFocus
            placeholder="Enter the name of song:"
            title="Name of the Song is required"
            onChange={handleTextChange}
            value={newSong.name}
          />
        </div>

        <div>
          <label htmlFor="artist">
            Artist Name :{" "}
          </label>
          <input
            id="artist"
            type="text"
            required
            placeholder="Enter the name of artist:"
            title="Artist is required"
            onChange={handleTextChange}
            value={newSong.artist}
          />
        </div>

        <div>
          <label htmlFor="album">
            Album Name :{" "}
          </label>
          <input
            id="album"
            type="text"
            placeholder="Enter the name of album:"
            onChange={handleTextChange}
            value={newSong.album}
          />
        </div>

        <div>
          <label htmlFor="time">
            Time :{" "}
          </label>
          <input
            id="time"
            type="text"
            placeholder="Enter the duration of the song:"
            onChange={handleTextChange}
            value={newSong.time}
          />
        </div>

        <div>
          <label
            htmlFor="is_favorite"
          >
            Favorite : {" "}
            <input
              id="is_favorite"
              type="checkbox"
              onChange={handleCheckboxChange}
            />
          </label>
        </div>

        <div>
          <button
            type="submit"
            onSubmit={handleSubmit}
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => navigate("/songs")}
          >
            Cancel
          </button>
          <button
            type="reset"
          >
            {" "}
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateSong;