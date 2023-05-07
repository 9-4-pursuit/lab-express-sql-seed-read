import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css'
import Song from '../components/Song'
export default function Home({
  api,
  songs,
  handleCurrentPlaylist,
  currentPlaylist,
}) {
  const navigate = useNavigate()
  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    axios.get(`${api}/playlist`).then(res => setPlaylists(res.data))
  }, [api])

  return (
    <div className='home'>
      <section className='playlist-section'>
        <h2>Playlist</h2>
        {playlists.map(playlist => (
          <button
            className={
              currentPlaylist && currentPlaylist.id === playlist.id
                ? 'selected'
                : 'buttons'
            }
            key={`playlist${playlist.id}`}
            onClick={() => handleCurrentPlaylist(playlist)}
          >
            {playlist.name}
          </button>
        ))}
        <aside className='add-playlist'>
          <button onClick={()=>navigate('/playlist/new')}>Add Playlist</button>
        </aside>
      </section>
      <section className='songs-section'>
        <h2>{currentPlaylist ? currentPlaylist.name : 'Songs'}</h2>
        {songs.length > 0 &&
          songs.map(song => <Song key={`song-${song.id}`} song={song} />)}
      </section>
    </div>
  )
}
