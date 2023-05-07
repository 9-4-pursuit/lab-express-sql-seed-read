import axios from "axios";
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function EditSong() {
    const [song, setSong] = useState({
        name: "",
        artist: "",
        album: "",
        is_favorite: false,
        time: ""
    })

    const { id } = useParams()
    const navigate = useNavigate()

    const handleTextChange = (e) => {
        setSong({ ...song, [e.target.id]: e.target.value });
    };

    const handleCheckboxChange = () => {
        setSong({ ...song, is_favorite: !song.is_favorite });
    };

    const updateSong = (updatedSong) => {
        axios.put(`${API}/songs/${id}`, updatedSong)
            .then(() => navigate(`/songs/${id}`))
            .catch((e) => console.warn(e))
    }

    useEffect(() => {
        axios.get(`${API}/songs/${id}`)
            .then((res) => setSong(res.data))
            .catch((e) => console.warn(e))
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        updateSong(song, id)
    }

    return (
        <div>
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