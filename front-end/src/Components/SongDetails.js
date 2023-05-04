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

  const toggleFavorite = () => {
    const updatedSong = {...song, is_favorite: !song.is_favorite};

    axios.put(`${API}/songs/${id}`, updatedSong)
    .then(() => {
      setSong(updatedSong)
    },
    (err) => console.error(err)
    )
    .catch((e) => console.warn("catch", e));
  }

  const handleUpdateFavorite = () => {
    toggleFavorite();
  }

  const deleteSong = () => {
    axios.delete(`${API}/songs/${id}`)
    .then((res) => {
      console.log(res);
      navigate("/songs");
    },
    (err) => console.error(err)
    )
    .catch((e) => console.warn("catch", e));
  }

  const handleDelete = () => {
    deleteSong();
  }

  return (<div className="Song-Details">
    <h3>
      <span 
        className="favorite"
        onClick={handleUpdateFavorite}> &nbsp; {song.is_favorite ? "⭐️" : "❌"} &nbsp; </span>
      {song.name} - By {song.artist}
    </h3>
    <h4 className="album">{song.album}</h4>
    <h5 className="duration">Duration: {song.time}</h5>

    <aside className="buttons">
      <Link to="/songs"><button>Back</button></Link>

      <Link to={`/songs/${id}/edit`}><button>Edit</button></Link>

      <button onClick={handleDelete}>Delete</button>
    </aside>
  </div>);
}