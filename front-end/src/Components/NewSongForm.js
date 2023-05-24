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

        </div>
    )
}