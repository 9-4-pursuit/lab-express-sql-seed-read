import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

export default function SongDetails () {
  const {id} = useParams();
  const [song, setSong] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API}/songs/${id}`)
    .then((res) => setSong(res.data))
    .catch((e) => console.warn("catch", e))
  }, [id]);

  return (<div className="SongDetails">
    <h3>
      <span className="favorite"> &nbsp; {song.is_favorite ? "⭐️" : "❌"} &nbsp; </span>
      {song.name} - By {song.artist}
    </h3>
    <h4 className="album">{song.album}</h4>
    <h5 className="duration">Duration: {song.time}</h5>
  </div>);
}