import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;


export default function SongEditForm() {
    let { id } = useParams();
    let navigate = useNavigate();

    const [song, setSong] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false,
    });

    const updateSong = (updatedSong) => {
        axios
            .put(`${API}/songs/${id}`, updatedSong)
            .then(() => {
                navigate(`/songs/${id}`);
            },
                (error) => console.error(error))
            .catch((err) => console.warn("catch", err));
    };

    const handleTextChange = (event) => {
        setSong({ ...song, [event.target.id]: event.target.value });
    };

    const handleCheckboxChange = () => {
        setSong({ ...song, is_favorite: !song.is_favorite });
    };

    useEffect(() => {
        axios.get(`${API}/songs/${id}`)
            .then(
                (response) => setSong(response.data),
                (error) => navigate(`/*`)
            );
    }, [id, navigate]);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateSong(song, id);
    };
    return (
        <div className="Edit">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    value={song.name}
                    placeholder="Name of Song"
                    onChange={handleTextChange}
                    required
                />
                <label htmlFor="artist">Artist:</label>
                <input
                    id="artist"
                    type="text"
                    value={song.artist}
                    placeholder="Artist Name"
                    onChange={handleTextChange}
                    required
                />
                <label htmlFor="album">Album:</label>
                <input
                    id="album"
                    type="text"
                    value={song.album}
                    placeholder="Album Title"
                    onChange={handleTextChange}
                />
                <label htmlFor="time">Time:</label>
                <input
                    id="time"
                    type="text"
                    value={song.time}
                    pattern="\d{1}:\d{2}"
                    placeholder="0:00"
                    onChange={handleTextChange}
                />
                <label htmlFor="is_favorite">Favorite?</label>
                <input
                    id="is_favorite"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={song.is_favorite}
                />

                <br />

                <input type="submit" />
            </form>
            <Link to={`/songs/${id}`}>
                <button>Nevermind!</button>
            </Link>
        </div>
    );
};
