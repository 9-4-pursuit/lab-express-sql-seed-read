import axios from "axios";
import { useState, useEffect } from "react";
import Song from "./Song.jsx";
const API = process.env.REACT_APP_API_URL;

function Songs() {
  const [allSongs, setAllSongs] = useState([]);
  const [filterOption, setFilterOption] = useState("");

  useEffect(() => {
    if (!filterOption.length) {
      async function getAll() {
        await axios
          .get(`${API}/songs`)
          .then(response => setAllSongs(response.data))
          .catch(error => console.error("Error: GET", error))
      }
      getAll();
    } else {
      async function getByFilter() {
        await axios
          .get(`${API}/songs?${filterOption}`)
          .then(response => setAllSongs(response.data))
          .catch(error => console.error("Error: GET", error))
      }
      getByFilter();
    }
  }, [filterOption]);

  function handleOptionChange(event) {
    setFilterOption(event.target.value);
  };

  return (
    <div className="Song">
      <label htmlFor="filterOption">Filter: </label>
      <select id="filterOption" value={filterOption.type} onChange={handleOptionChange}>
        <option value="" defaultValue>All</option>
        <option value="order=asc">Ascending order</option>
        <option value="order=desc">Descending order</option>
        <option value="is_favorite=true">Favorite</option>
        <option value="is_favorite=false">Non-Favorite</option>
      </select>

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