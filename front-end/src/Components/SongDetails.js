import axios from "axios";

import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
// import Reviews from "./Reviews";

const API = process.env.REACT_APP_API_URL;

function SongDetails() {
  const [song, setSong] = useState([]);
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
    //when doing an axios call the URL must match the backend URL hence why we are pulling one song--
    //WHENEVER TARGETING FROM THE FRONT END IT MUST MATCH THE BACKEND AXIOS CALL.
      .get(`${API}/song/${id}`)
      .then((response) => {
        console.log(response.data);
        setSong(response.data);
      })
      .catch((error) => {
        console.warn("catch", error);
      });
  }, [id]);

// delete must navigate back to the index page
const deleteSong = () => {
  axios
    .delete(`${API}/song/${id}`)
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
}

  return (
    <article>
      <h3>
        {song.is_favorite ? <span>⭐️</span> : null} {song.name}
      </h3>
      <h5>
        <span>
          <a href={song.url}>{song.name}</a>
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {song.url}
      </h5>
      <h6>{song.category}</h6>
      <p>{song.description}</p>

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


    {/* import and render your reviews below */}
      {/* <Reviews songsId={id} /> */}
    </article>
  );
}

export default SongDetails;
