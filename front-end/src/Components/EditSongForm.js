import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"

const API = process.env.REACT_APP_API_URL;

export default function EditSongForm() {

  let { id } = useParams();
  let navigate = useNavigate()

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  })

  const updateSong = (updatedSong) => {
    axios
    .put(`${API}/songs/${id}`, updatedSong)
    .then( () => {
      navigate(`songs/${id}`);
    },
    (error) => console.error(error)
    )
    .catch( (c) => console.warn("catch", c))
  }

  const handleTextChange = (event) => {
    setSong({...song, [event.target.id]: event.target.value})
    }
    
    const handleCheckboxChange = () => {
      setSong({...song, is_favorite: !song.is_favorite})
    }
    
    useEffect(() => {
      axios
      .get(`${API}/songs/${id}`)
      .then((response) => setSong(response.data), 
      (error) => navigate(`/not-found`)
      )
    }, [id, navigate])

    const handleSubmit = (event) => {
      event.preventDefault();
      updateSong(song, id)
    }

  return (
    
      <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Song Name: </label> <br></br>
        <input
        id="name"
        type="text"
        value={song.name}
        onChange={handleTextChange}
        required
        />
      <br></br>

      <label htmlFor="artist"> Artist: </label><br></br>
        <input
        id="artist"
        type="text"
        value={song.artist}
        onChange={handleTextChange}
        required
        />
        <br></br>

        <label htmlFor="album"> Album: </label> <br></br>
        <input
        id="album"
        type="text"
        value={song.album}
        onChange={handleTextChange}
        required
        />
        <br></br>

        <label htmlFor="time"> Time: </label> <br></br>
        <input
        id="time"
        type="text"
        value={song.time}
        onChange={handleTextChange}
        required
        />
        <br></br> 
        
        <label htmlFor="is_favorite"> Favorite </label> <br></br>
        <input
        id="is_favorite"
        type="checkbox"
        checked={song.is_favorite}
        onChange={handleCheckboxChange}
        required
        />
        <br></br>

        <input type="submit" />

      </form>

      <br></br>
{/* <Link to={`/songs/${id}`}> 
<button> Back </button>
</Link> */}
      
    </div>
  )
}
