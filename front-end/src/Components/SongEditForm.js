import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, Link, useNavigate} from "react-router-dom"

const API = process.env.REACT_APP_API_URL;

function SongEditForm() {
    let { id } = useParams();
    let navigate = useNavigate();

    const [song, setSong] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false
    });

    useEffect(() => {
        axios.get(`${API}/songs/${id}`).then(
            (response) => setSong(response.data),
            (error) => navigate(`/not-found`)
        )
    })


    return (
        <div className="Edit">
            <form>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    value={song.name}
                    type="text"
                    placeholder="Name of Song"
                    required
                />

                <label htmlFor="artist">Artist:</label>
                <input
                    id="artist"
                    value={song.artist}
                    type="text"
                    placeholder="Name of Artist"
                    required
                />

                <label htmlFor="album">Album:</label>
                <input
                    id="album"
                    value={song.album}
                    type="text"
                    placeholder="Name of Album"
                    required
                />

                <label htmlFor="time">Time:</label>
                <input
                    id="time"
                    value={song.time}
                    type="text"
                    placeholder="Duration"
                    required
                />
                 <br/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default SongEditForm;