import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function SongNewForm() {
    let navigate = useNavigate();

    const addSong = (newSong) => {
        console.log("New Song", songs);

        axios 
        .post(`${API}/songs`, newSong)
        .then(
            () => {
                navigate(`/songs`);
            },
            (error) => console.log(error)
        )
        .catch((c) => console.warn("catch", c));
    };

    const [ songs, setSongs ] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false,
    });

    const handleTextChange = (e) => {
        setSongs({ ...songs, [e.target.id]: e.target.value });
    }
    
    const handleCheckboxChange = () => {
        setSongs({ ...songs, is_favorite: !songs.is_favorite });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addSong(songs);
    };


  return (
    <div className="new">
        <h1>New Song Form</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Title of Song:</label>
        <input
          id="name"
          value={songs.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Title of Song"
          required
        />

        <label htmlFor="artist">Name of Artist:</label>
        <input
          id="artist"
          type="text"
          value={songs.artist}
          placeholder="Artist"
          onChange={handleTextChange}
        />

        <label htmlFor="album">Name of Album:</label>
        <input
          id="album"
          type="text"
          value={songs.album}
          placeholder="album"
          onChange={handleTextChange}
        />
        
        <label htmlFor="album">Time:</label>
        <input
          id="time"
          type="text"
          value={songs.time}
          placeholder="0:00"
          onChange={handleTextChange}
        />

        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={songs.is_favorite}
        />

        <br />

        <input type="submit" />
      </form>
    </div>
  );
};