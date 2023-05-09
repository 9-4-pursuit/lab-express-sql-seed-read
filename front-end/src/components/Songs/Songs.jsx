import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    <div className="flex flex-col items-center justify-between">
      <div className="p-3 min-w-full">
        <h1 className="flex text-2xl items-center justify-center">Songs</h1>
        <div>
          <label
            htmlFor="filterOption"
            className="pr-2 mb-2 text-lg font-medium text-gray-900"
          >
            Filter:
          </label>
          <select
            id="filterOption"
            value={filterOption.type}
            onChange={handleOptionChange} 
            className="text-sm rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 p-2.5"
          >
            <option value="" defaultValue>All</option>
            <option value="order=asc">Ascending order</option>
            <option value="order=desc">Descending order</option>
            <option value="is_favorite=true">Favorite</option>
            <option value="is_favorite=false">Non-Favorite</option>
          </select>
          <button
            className="py-2 px-2 rounded-md bg-blue-100 border border-transparent text-sm font-semibold content-end text-blue-500 hover:text-blue-700 hover:bg-blue-200"
          >
            <Link to={`/songs/new`}>New Song</Link>
          </button>
        </div> 

        <div>
          <section className="py-4">
            <table className="min-w-full divide-y border border-gray-300 divide-gray-200 dark:divide-gray-700 text-center">
              <thead className="border border-b-gray-300 bg-sky-200 font-medium">
                <tr>
                  <th className="px-6 py-2 text-m font-medium text-gray-600 uppercase">Fav</th>
                  <th className="px-6 py-2 text-m font-medium text-gray-600 uppercase">#</th>
                  <th className="px-6 py-2 text-m font-medium text-gray-600 uppercase">Song</th>
                  <th className="px-6 py-2 text-m font-medium text-gray-600 uppercase">Artist</th>
                  <th className="px-6 py-2 text-m font-medium text-gray-600 uppercase">Duration</th>
                </tr>
              </thead>
              <tbody>
                {
                  allSongs.map((song, index) => {
                    return <Song key={song.id} song={song} index={index} />
                  })
                }
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Songs;