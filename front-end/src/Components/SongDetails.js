import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function SongDetails() {
    const [singleSong, setSingleSong] = useState([]);
    const { id } = useParams();
    // let navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/songs/${id}`)
        .then((response) => {
            setSingleSong(response.data)
        }).catch((e) => {
            console.warn("catch", e)
        })
    }, [id])

    return (
        <article>
            <h3>{singleSong.is_favorite ? <span>⭐️</span> : null} {singleSong.name} - By{singleSong.artist}</h3>

            <h4>{singleSong.album}</h4>
            <h5>{singleSong.time}</h5>

            <div>
                <div>
                    <button>Back</button>
                </div>

                <br></br>

                <div>
                    <button>Edit</button>
                </div>

                <br/>

                <div>
                    <button>Delete</button>
                </div>
            </div>
            
        </article>
        

        
        
    )

};

export default SongDetails;
