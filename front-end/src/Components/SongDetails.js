import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link} from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function SongDetails() {
    const [singleSong, setSingleSong] = useState([]);
    const { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/songs/${id}`)
        .then((response) => {
            setSingleSong(response.data)
        }).catch((e) => {
            console.warn("catch", e)
        })
    }, [id])

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
        deleteSong()
    }


    return (
        <article>
            <h3>{singleSong.is_favorite ? <span>⭐️</span> : null} {singleSong.name} - By{singleSong.artist}</h3>

            <h4>{singleSong.album}</h4>
            <h5>{singleSong.time}</h5>

            <div>
                <Link to={`/songs`}>
                <div>
                    <button>Back</button>
                </div>
                </Link>

                <br></br>

                <Link to= {`/songs/${id}/edit`}>
                <div>
                    <button>Edit</button>
                </div>
                </Link>

                <br/>

                <div>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
            
        </article>
        

        
        
    )

};

export default SongDetails;
