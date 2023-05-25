import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

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
    <div
      className="song-detail"
      style={{ paddingBottom: "10rem" }}
    >
      <div className="song-title">
        <div className="song-info">
          <h2>
            <strong>Title : </strong>
            {showSong.name}
          </h2>
          <h2>
            <strong>Artist : </strong>
            {showSong.artist}
          </h2>
          <h3>
            <strong>Album : </strong>
            {showSong.album}
          </h3>
          <h3>
            <strong>Duration : </strong>
            {showSong.time}
          </h3>
          {showSong.is_favorite ? (
            <h3 className="song-meta">
              <strong>Favorite Song : ⭐️ </strong>
            </h3>
          ) : (
            <h3 className="song-meta">
              <strong>Favorite Song : ❌ </strong>
            </h3>
          )}
        </div>

        <div>
          <div>
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
      </div>
    </div>
  );
}

export default SongDetails
