import Song from "./Song";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// const API = process.env.REACT_APP_API_URL;
const API = 'http://localhost:8889'

export default function Songs() {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        axios.get(`${API}/songs`)
            .then((res) => setSongs(res.data))
            .catch((e) => console.warn(e))
    })

    return (
        <div className="Songs">
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th></th>
                            <th>Artist</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            songs.map((song) => {
                                return <Song key={song.id} song={song} />
                            })
                        }
                    </tbody>
                </table>
                <button className="new"><Link to={`/songs/new`}>New Song</Link></button>
            </section>
        </div>
    )
}