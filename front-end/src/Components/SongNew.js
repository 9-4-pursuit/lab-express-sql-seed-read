import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

export default function SongNew () {
  let navigate = useNavigate();
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false
  });

  const handleTextChange = (event) => {
    setSong({...song, [event.target.id]: event.target.value});
  }

  const handleCheckboxChange = () => {
    setSong({...song, is_favorite: !song.is_favorite});
  }

  const addSong = (newSong) => {
    axios.post(`${API}/songs`, newSong)
    .then(() => {
      navigate("/songs")
    },
      (err) => console.error(err)
    )
    .catch((e) => console.warn("catch", e));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong(song);
  }

  return (<div className="SongNew">
    <form onSubmit={handleSubmit}>

      <label htmlFor="name">Song Name:</label>
      <input 
        type="text"
        id="name"
        name="name"
        value={song.name}
        onChange={handleTextChange}
        required/>

      <label htmlFor="artist">Artist:</label>
      <input 
        type="text"
        id="artist"
        name="artist"
        value={song.artist}
        onChange={handleTextChange}
        required/>

      <label htmlFor="album">Album:</label>
      <input
        type="text"
        id="album"
        name="album"
        value={song.album}
        onChange={handleTextChange}/>

      <label htmlFor="time">Time:</label>
      <input 
        type="text"
        id="time"
        name="time"
        value={song.time}
        placeholder="00:00"
        onChange={handleTextChange}/>

      <label htmlFor="is_favorite">Favorite:</label>
      <input
        type="checkbox"
        id="is_favorite"
        name="is_favorite"
        checked={song.is_favorite}
        onChange={handleCheckboxChange}/>   

      <input type="submit"/>  

    </form>
  </div>);
}