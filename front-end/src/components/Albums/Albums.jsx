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
    <>
      <button>
        <Link to={`/albums/new`}>New Album</Link>
      </button>
      <div className="Album">
        <label htmlFor="filterOption">Filter: </label>
        <select id="filterOption" value={filterOption.type} onChange={handleOptionChange}>
          <option value="" defaultValue>All</option>
          <option value="order=asc">Ascending order</option>
          <option value="order=desc">Descending order</option>
        </select>

        <section>
          <table>
            <thead>
              <tr>
                <th>Fav</th>
                <th>#</th>
                <th>Name</th>
                <th>Artist</th>
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
    </>
  );
}

export default Albums;