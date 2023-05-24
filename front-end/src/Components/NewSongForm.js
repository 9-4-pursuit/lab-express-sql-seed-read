import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function NewSongForm() {

    const [song, setSong] = useState({
        name: "",
        artist: "",
        album: "",
        is_favorite: false,
        time: ""
    })

    const navigate = useNavigate()

    const handleTextChange = (e) => {
        setSong({ ...song, [e.target.id]: e.target.value });
    };

    const handleCheckboxChange = () => {
        setSong({ ...song, is_favorite: !song.is_favorite });
    };

    const addSong = (newSong) => {
        axios.post(`${API}/songs`, newSong)
            .then(() => navigate('/songs'))
            .catch((e) => console.warn(e))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addSong(song)
    }

    return (
        <div className="New">
            <h1>New</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Song Name:</label>
                <input
                    id="name"
                    value={song.name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name of song"
                    required
                />
                <label htmlFor="artist">Artist:</label>
                <input
                    id="artist"
                    value={song.artist}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name of artist"
                    required
                />
                <label htmlFor="album">Album:</label>
                <input
                    id="album"
                    value={song.album}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name of album"
                    required
                />
                <label htmlFor="is_favorite">Favorite:</label>
                <input
                    id="is_favorite"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={song.is_favorite}
                />
                <label htmlFor="time">Time:</label>
                <input
                    id="time"
                    value={song.time}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="0:00"
                    required
                />
                <input type="submit" />
            </form>
        </div>
    )
}