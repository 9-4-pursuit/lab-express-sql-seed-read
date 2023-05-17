import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export default function NewSong({api}) {
    const navigate = useNavigate()
  const [song, setSong] = useState({
    name: '',
    album: '',
    artist: '',
    time: '',
    is_favorite: false,
  });
  const handleTextChange = e => {
    setSong({
      ...song,
      [e.target.name]: e.target.value,
    });
  };
  const handleCheckbox = e => {
    setSong({
        ...song,
        is_favorite:!song.is_favorite
    })
  };

  const handleSubmit=(e)=>{
    e.preventDefault()
    const newSong = {
        name:song.name,
        album:song.album,
        artist:song.artist,
        time:song.time,
        is_favorite:song.is_favorite
    }
    axios.post(`${api}/songs`, newSong).then(_=>navigate('/songs'))

  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>New Song</h1>
      <label htmlFor='name'>Song Name</label>
      <input type='text' name='name' id='name' onChange={handleTextChange} required/>
      <label htmlFor='album'>Album</label>
      <input type='text' name='album' id='album' onChange={handleTextChange} />
      <label htmlFor='artist'>Artist</label>
      <input
        type='text'
        name='artist'
        id='artist'
        onChange={handleTextChange}
        required
      />


      <label htmlFor='time'>Time</label>
      <input
        type='text'
        name='time'
        id='time'
        value={song.time}
        onChange={handleTextChange}
        />
     

      <input
      id='is_favorite'
        type='checkbox'
        name='is_favorite'
        checked={song.is_favorite}
        onChange={handleCheckbox}
      /><label htmlFor='is_favorite'>Favorite</label>
      <input type='submit' value='Submit'/>
    </form>
  );
}
