import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function SongDetails() {

    const [song, setSong] = useState({})

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
        <div className="Show">

        </div>
    )
}

