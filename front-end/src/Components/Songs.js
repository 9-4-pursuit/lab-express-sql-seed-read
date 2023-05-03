import Song from "./Song";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Songs() {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        axios.get(`${API}/songs`)
            .then((res) => setSongs(res.data))
            .catch((e) => console.warn(e))
    })

    return (
        <div className="Songs">
            <h1>songs</h1>
        </div>
    )
}