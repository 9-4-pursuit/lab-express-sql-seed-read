import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Song from "./Song"
const API = process.env.REACT_APP_API_URL;

export default function Songs() {
const [songs, setSongs] = useState([]);

useEffect(() => {
  axios
  .get(`${API}/songs`)
  .then((response) => setSongs(response.data))
  .catch((e) => console.warn("catch", e))
}, [])

  return (
    <div className="Songs">
       <button className="NewSong-button">
            <Link to="/songs/new" className="Links">New Song</Link>
        </button>
      <section>
        <h1 className="Playlist">PlayList</h1>
        <table>
          <thead>
          
            <tr>
              <th>Fav</th>
              <th>Song</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Time</th>
            </tr>
          </thead>
          
          <tbody>
            {songs.map((song) => {
              return <Song key={song.id} song={song} /> 
            })}
            
          </tbody>
          
        </table>
      </section>
      
      
      </div>
  )
}
