import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// import "../Css/Details.css"

function SongDetails() {
  const [showSong, setShowSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: "",
  });

  let { id } = useParams(); 
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/songs/${id}`)
      .then((response) => setShowSong(response.data))
      .catch((error) => {
        console.log(error);
        navigate("/not-found");
      });
  }, [id, navigate]);

  function handleDelete() {
    if (window.confirm("Are you sure you want to delete this song ? ")) {
      fetch(`${process.env.REACT_APP_API_URL}/songs/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          navigate("/songs");
        })
        .catch((error) => {
          console.log(error);
          navigate("/not-found");
        });
    }
  }

  return (
    <div className="song-detail">
    <div className="song-info">
      <div className="song-title">
        <h2>{showSong.name}</h2>
        <h3>{showSong.artist}</h3>
        <h4>{showSong.album}</h4>
      </div>
      <div className="song-meta">
        <h5>{showSong.time}</h5>
        {showSong.is_favorite ? (
          <h5><span role="img" aria-label="star">⭐️</span> Favorite Song</h5>
        ) : (
          <h5><span role="img" aria-label="cross">❌</span> Favorite Song</h5>
        )}
      </div>
    </div>

    <div className="song-actions">
      <button className="button-back">
        <Link to="/songs">Back</Link>
      </button>
      <button className="button-edit">
        <Link to={`/songs/${id}/edit`}>Edit</Link>
      </button>
      <button className="button-delete" onClick={handleDelete}>
        Delete
      </button>
    </div>
  </div>
  );
}
export default SongDetails;