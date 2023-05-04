import axios from "axios";
import {useState, useEffect} from "react";
import Song from "./Song.js";

const API = process.env.REACT_APP_API_URL;

export default function Songs () {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get(`${API}/songs`)
    .then((response) => 
    {
      setSongs(response.data);
      console.log(response.data);
    })
    .catch((e) => console.warn("catch", e));
  }, []);

  return (<div className="Songs">
    <table>

      <thead>
        <tr>
          <th>Song</th>
          <th>Fav</th>
          <th>Artist</th>
          <th>Duration</th>
        </tr>
      </thead>

      <tbody>
        {songs.map((song) => {
          return <Song 
            key={song.id} 
            song={song}/>
        })}
      </tbody>

    </table>
  </div>);
}