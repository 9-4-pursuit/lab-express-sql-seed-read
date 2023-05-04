import axios from "axios"
import { useState, useEffect } from "react"
import Song from "./Song"

const API = process.env.REACT_APP_API_URL;

function Songs() {
    const [songs, setSongs] = useState([])


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`${API}/songs`);
            setSongs(response.data);
          } catch (error) {
            console.warn("catch", error);
          }
        };
        fetchData();
      }, []);
   
    return (
        <div className="Songs">
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Favs</th>
                            <th>Name</th>
                            <th>Artist</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {songs && songs.map((song) => {
                            return <Song key={song.id} song={song} />
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Songs;