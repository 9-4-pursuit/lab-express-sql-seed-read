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
    }, [id, navigate]);

    const updateSong = (updatedSong) => {
        axios
          .put(`${API}/songs/${id}`, updatedSong)
          .then(
            () => {
              navigate(`/songs/${id}`);
            },
            (error) => console.error(error)
          )
          .catch((c) => console.warn("catch", c));
      };


    const handleSubmit = (event) => {
        event.preventDefault()
        updateSong(song, id)
    };

    const handleTextChange = (event) => {
        setSong({...song, [event.target.id]: event.target.value})
    };

    const handleCheckboxChange = () => {
        setSong({ ...song, is_favorite: !song.is_favorite });
    };

    return (
        <div className="Edit">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    value={song.name}
                    type="text"
                    placeholder="Name of Song"
                    required
                    onChange={handleTextChange}
                />

                <label htmlFor="artist">Artist:</label>
                <input
                    id="artist"
                    value={song.artist}
                    type="text"
                    placeholder="Name of Artist"
                    required
                    onChange={handleTextChange}
                />

                <label htmlFor="album">Album:</label>
                <input
                    id="album"
                    value={song.album}
                    type="text"
                    placeholder="Name of Album"
                    required
                    onChange={handleTextChange}
                />

                <label htmlFor="time">Time:</label>
                <input
                    id="time"
                    value={song.time}
                    type="text"
                    placeholder="Duration"
                    required
                    onChange={handleTextChange}
                />

                <label>Favorite:</label>
                <input
                    id="is_favorite"
                    type="checkbox"
                    checked={song.is_favorite}
                    onChange={handleCheckboxChange}
                />
                
                 <br/>
                <input type="submit"/>
            </form>

            <Link to={`/songs/${id}`}><button>Go Back</button></Link>
        </div>
    )
}

export default SongEditForm;