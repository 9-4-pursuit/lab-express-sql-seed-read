import axios from 'axios';
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL

export default function SongDetails() {
    const [song, setSong] = useState([]);
    const { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/songs/${id}`)
            .then((response) => {
                console.log(response.data);
                setSong(response.data);
            }).catch((e) => {
                console.warn("catch", e);
            })

    }, [id, API]);

    //delete
    const deleteSong = () => {
        axios.delete(`${API}/songs/${id}`)
            .then(() => {
                navigate(`/songs`);
            },
                //adds a callback function in case doesn't work.  So the .then works like an if/else
                // the "error" below catches a front end error.
                (error) => console.error(error)
            )
            // the .catch c below catches a back end error.
            .catch((c) => console.warn("catch", c))
    }

    const handleDelete = () => {
        deleteSong();
    }


    return (
        <article>
            <h3>{song.is_favorite ? <span>⭐️</span> : null} {song.name}</h3>
            <h5>{song.artist}</h5>
            <h6>{song.album}</h6>
            <p>{song.time}</p>

            <div className="showNavigation">

                <div>
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
}