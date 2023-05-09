import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Album from "./Album.jsx";
const API = process.env.REACT_APP_API_URL;

function Albums() {
  const [allAlbums, setAllAlbums] = useState([]);
  const [filterOption, setFilterOption] = useState("");

  useEffect(() => {
    if (!filterOption.length) {
      async function getAll() {
        await axios
          .get(`${API}/albums`)
          .then(response => setAllAlbums(response.data))
          .catch(error => console.error("Error: GET", error))
      }
      getAll();
    } else {
      async function getByFilter() {
        await axios
          .get(`${API}/albums?${filterOption}`)
          .then(response => setAllAlbums(response.data))
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
        <h1 className="flex text-2xl items-center justify-center">Albums</h1>
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
          </select>

          <button
            className="py-2 px-2 rounded-md bg-blue-100 border border-transparent text-sm font-semibold content-end text-blue-500 hover:text-blue-700 hover:bg-blue-200"
          >
            <Link to={`/albums/new`}>New Album</Link>
          </button>
        </div>

        <div>
          <section className="py-4">
            <table className="min-w-full divide-y border border-gray-300 divide-gray-200 dark:divide-gray-700 text-center">
              <thead className="border border-b-gray-300 bg-sky-200 font-medium">
                <tr>
                  <th className="px-6 py-2 text-m font-medium text-gray-600 uppercase">Fav</th>
                  <th className="px-6 py-2 text-m font-medium text-gray-600 uppercase">#</th>
                  <th className="px-6 py-2 text-m font-medium text-gray-600 uppercase">Album</th>
                  <th className="px-6 py-2 text-m font-medium text-gray-600 uppercase">Artist</th>
                </tr>
              </thead>
              <tbody>
                {
                  allAlbums.map((album, index) => {
                    return <Album key={album.id} album={album} index={index} />
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

export default Albums;