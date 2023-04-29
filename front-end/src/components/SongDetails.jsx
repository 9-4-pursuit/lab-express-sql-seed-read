import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function SongDetails() {
  const [theSong, setTheSong] = useState([]);
  const { name, artist, album, time, is_favorite } = theSong;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then(response => setTheSong(response.data))
      .catch(error => console.error("Error: GET", error))
  }, [id]);

  function handleDelete() {
    if (window.confirm("Are you sure you want to delete this song?")) {
      axios
        .delete(`${API}/songs/${id}`)
        .then(() => navigate('/songs'))
        .catch(error => console.error("Error: DELETE", error))
    }
  }

  return (
    <div className="Song-Details">
      <p>
        {
          is_favorite
          ? "⭐️ "
          : ""
        }
        {name} - By {artist}
      </p>
      <p>{album}</p>
      <p>Time: {time}</p>

      <button><Link to="/songs">Back</Link></button>
      <button><Link to={`/songs/${id}/edit`}>Edit</Link></button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default SongDetails;