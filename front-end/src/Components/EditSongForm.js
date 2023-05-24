import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function EditSongForm() {

    const [song, setSong] = useState({
        name: "",
        artist: "",
        album: "",
        is_favorite: false,
        time: ""
    })

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${API}/songs/${id}`)
            .then((res) => setSong(res.data))
            .catch((e) => console.warn(e))
    }, [id])

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

    const handleSubmit = (e) => {
        e.preventDefault();
        updateSong(song, id)
    }
    return (
        <div className="Edit">

        </div>
    )
}