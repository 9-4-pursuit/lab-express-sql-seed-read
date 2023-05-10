import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SongDetails() {
  const [song, setSong] = useState({});
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((response) => {
        console.log(response.data);
        setSong(response.data);
      })
      .catch((error) => {
        console.warn("catch", error);
      });
  }, [id]);

  const deleteSong = () => {
    axios
      .delete(`${API}/songs/${id}`)
      .then(
        () => {
          navigate(`/songs`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleDelete = () => {
    deleteSong();
  };

  return (
    <article>
      <h3>
        {song.is_favorite ? <span>⭐️</span> : null} {song.title}
      </h3>
      <h5>
        <span>
          <a href={song.url}>{song.title}</a>
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {song.url}
      </h5>
      <h6>{song.genre}</h6>
      <p>{song.time}</p>

      {song ? (
        <div>
          <p>Artist: {song.artist}</p>
          <p>Album: {song.album}</p>
        </div>
      ) : null}

      {/* import and render your reviews below */}
      {/* <Reviews songsId={id} /> */}

      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/songs`}>
            <button>🔙</button>
          </Link>
        </div>
        <div>
          <Link to={`/songs/${id}/edit`}>
            <button>✍🏼</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>🗑️</button>
        </div>
      </div>
    </article>
  );
}

export default SongDetails;
