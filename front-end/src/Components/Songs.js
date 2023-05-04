import axios from "axios";
import { useState, useEffect } from "react";
import Song from "./Song";

const API = process.env.REACT_APP_API_URL;


export default function Songs() {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        axios.get(`${API}/songs`)
            .then((response) => setSongs(response.data))
            .catch((err) => console.warn("catch", err));
    }, []);


    return (
        <div className="Songs">
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Favorite</th>
                            <th>Title</th>
                            <th>Artist</th>
                            <th>Length</th>
                            <th>More...</th>

                        </tr>
                    </thead>
                    <tbody>
                        {songs.map((song) => {
                            return <Song key={song.id} song={song} />;
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    );
};
