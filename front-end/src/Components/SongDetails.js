import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";


const API = process.env.REACT_APP_API_URL;


export default function SongDetails() {
    const [song, setSong] = useState([]);
    const { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/songs/${id}`)
            .then((response) => {
                console.log(response.data)
                setSong(response.data)
            }).catch((err) => {
                console.warn("catch", err)
            })

    }, [id, API])


    //delete 
    const deleteSong = () => {
        axios.delete(`${API}/songs/${id}`)
            .then(() => {
                navigate(`/songs`);
            },
                (error) => console.error(error)
            )
            .catch((c) => console.warn("catch", c))
    }

    const handleDelete = () => {
        deleteSong();
    }

    return (
        <article>
            <h3>{song.is_favorite ? <span>⭐️</span> : null} {song.name}</h3>
            <h5>
                <span>
                    {song.name}
                </span>
                &nbsp;&nbsp;&nbsp; by: &nbsp;&nbsp; {song.artist}
            </h5>
            <h6>Album: {song.album}</h6>
            <h6>Length: {song.time}</h6>

            <div className="showNavigation">

                <div>
                    {" "}
                    <Link to={`/songs`} >
                        <button>Back</button>
                    </Link>
                </div>

                <div>
                    <Link to={`/songs/${id}/edit`}>
                        <button>Edit</button>
                    </Link>
                </div>

                <div>
                    <button onClick={handleDelete}>Delete</button>
                </div>

            </div>

        </article>
    )
};
