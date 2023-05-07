import axios from "axios"
import { useEffect, useState } from "react"
import {Link, useParams, useNavigate} from "react-router-dom"

const API = process.env.REACT_APP_API_URL

export default function SongDetails() {
  const [song, setSong] = useState([]);
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
    .get(`${API}/songs/${id}`)
    .then((response) => {
      setSong(response.data)
    })
    .catch((e) => {console.warn("catch", e)
    })
    }, [id])


  //delete
  const deleteSong = () => {
    axios
    .delete(`${API}/songs/${id}`)
    .then(() => {
      navigate(`/songs`)
    },
    (error) => console.error(error)
    )
    .catch((c) => console.warn("catch", c))
  }

  const handleDelete = () => {
    deleteSong()
  }

  return (
    <div>
      <br></br>
      <h1 className="SongDetails"> Song Details </h1>
      <br></br>

    <article className="songDetails">
    
      {song.is_favorite ? 
        (<span>🌟</span>) : 
        (<span>&nbsp; &nbsp; &nbsp;</span>)}
      <h1 className="Title">Song - {song.name} </h1>
      <h1><span className="artist">Artist - {song.artist}</span></h1>
      <h2 className="Album"> 
        <span>
          Album - {song.album}
        </span>
      </h2>

      <h3 className="Time">Time: {song.time}</h3>

      <div className="showNavigation">

        <div>
        <Link to={`/songs`}> 
          <button> Back </button>
        </Link>
        </div>
    
        <div>
        <Link to={`/songs/${id}/edit`}> 
          <button> Edit </button>
        </Link>
        </div>

        <div>
        
          <button onClick={handleDelete}> Delete </button>
        
        </div>

      </div>  
    </article>
      
    </div>
  
  )
}

