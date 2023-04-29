import axios from "axios";
import { useState, useEffect } from "react";
import Song from "./Song.jsx";
const API = process.env.REACT_APP_API_URL;

function Songs() {
  const [allSongs, setAllSongs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then(response => setAllSongs(response.data))
      .catch(error => console.error("Error: GET", error))
  }, []);

  return (
    <div>
      <section>
        <table>
          <thead>
            <tr>
              <th>Fav</th>
              <th>Song</th>
              <th>Artist</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {
              allSongs.map((song) => {
                return <Song key={song.id} song={song} />
              })
            }
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Songs;