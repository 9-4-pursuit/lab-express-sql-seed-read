import { useState } from 'react'
import './playlist-form.css'
export default function NewPlaylist({handleSubmit}) {
  const [playlist, setPlaylist] = useState({
    name: '',
    is_favorite: false,
  })
  const handleTextChange = e => {
    setPlaylist({
      ...playlist,
      [e.target.name]: e.target.value,
    })
  }
  const handleCheckbox = () => {
    setPlaylist({
      ...playlist,
      is_favorite: !playlist.is_favorite,
    })
  }

  return (
    <form onSubmit={(e)=>handleSubmit(e,playlist)}>
      <label htmlFor='name'>Playlist Name:</label>
      <br />
      <input type='text' name='name' id='name' onChange={handleTextChange}/>
      <br />
      <label htmlFor='is_favorite'>Favorite Playlist</label>
      <input
        type='checkbox'
        name='is_favorite'
        id='is_favorite'
        onClick={handleCheckbox}
      />
      <input type='submit' className='submit' value='Create Playlist'/>
    </form>
  )
}
