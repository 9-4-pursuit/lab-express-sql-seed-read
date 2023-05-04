import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

export default function SongEdit () {
  const {id} = useParams();
  const navigate = useNavigate();
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false
  });

  useEffect(() => {
    axios.get(`${API}/songs/${id}`)
    .then((res) => {
      setSong(res.data)
    },
      () => navigate("/not-found")
    )
    .catch((e) => console.warn("catch", e));
  }, [id, navigate])

  const handleTextChange = (event) => {
    setSong({...song, [event.target.id]: event.target.value});
  }

  const handleCheckboxChange = () => {
    setSong({...song, is_favorite: !song.is_favorite});
  }

  const editSong = (updatedSong) => {
    axios.put(`${API}/songs/${id}`, updatedSong)
    .then((res) => {
      navigate(`/songs/${id}`)
    },
      (err) => console.error(err)
    )
    .catch((e) => console.warn("catch", e))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    editSong(song);
  }

  return (<div className="SongEdit">
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
      value={song.album ? song.album : ""}
      onChange={handleTextChange}/>

    <label htmlFor="time">time:</label>
    <input 
      type="text"
      id="time"
      name="time"
      value={song.time ? song.time : ""}
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
    <Link to={`/songs/${id}`}><button>Cancel</button></Link>
    </form>
  </div>);
}