import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function SongDetails() {
    const [song, setSong] = useState([])

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${API}/songs/${id}`)
            .then((res) => setSong(res.data))
            .catch((e) => console.warn(e))
    }, [id])

    const handleDelete = () => {
        axios.delete(`${API}/songs/${id}`)
            .then(() => navigate('/songs'))
    }

    return (
        <div className="Song-Details">
            <h1>Song Details</h1>
            <h2>{song.is_favorite ? <span>⭐️</span> : <span>◎</span>}{song.name} by {song.artist}</h2>
            <h3>{song.album}</h3>
            <h4>Duration: {song.time}</h4>
            <button><Link to={`/songs`}>Back</Link></button>
            <button><Link to={`/songs/${song.id}/edit`}>Edit</Link></button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}