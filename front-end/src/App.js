import { Route, Routes,useNavigate } from 'react-router-dom'
import Home from './views/Home'
import Navbar from './components/Navbar'
import NewPlaylist from './views/NewPlaylist'
import EditPlaylist from './views/EditPlaylist'
import Songs from './views/Songs'
import ShowSingleSong from './views/ShowSingleSong'
import NewSong from './views/NewSong'
import { useState, useEffect } from 'react'
import axios from 'axios'
import waveOutline from './assets/wave (3).svg'


function App() {
  const navigate = useNavigate()
  const [currentPlaylist, setCurrentPlaylist] = useState()
  const [songs, setSongs] = useState([])
  const [error, setError] = useState()
  const [newPlaylist, setNewPlaylist] = useState({})
  const API = process.env.REACT_APP_API_URL
  const handleCurrentPlaylist = playlist_id => {
    setCurrentPlaylist(playlist_id)
  }
  useEffect(() => {
    axios.get(`${API}/playlist`).then(res => setCurrentPlaylist(res.data[0]))
  }, [API])

  useEffect(() => {
    if (currentPlaylist) {
      axios
        .get(`${API}/playlist/${currentPlaylist.id}/songs`)
        .then(res => setSongs(res.data))
    }
  }, [currentPlaylist, API])

  const handleSubmit=(e,playlist)=>{
    e.preventDefault()
    axios.post(`${API}/playlist/`, playlist).then(res=>navigate(`/playlist/${playlist.id}/addSong/`))
    .catch(setError())  
  }
  return (
    <div className=''>
     
      <div className='wave-outline'>
        <img src={waveOutline} alt='wave-outline' />
      </div>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <main>
          <Routes>
            <Route
              path='/'
              element={
                <Home
                  api={API}
                  handleCurrentPlaylist={handleCurrentPlaylist}
                  songs={songs}
                  currentPlaylist={currentPlaylist}
                />
              }
            />
            <Route path='/playlist/new' element={<NewPlaylist api={API} handleSubmit={handleSubmit} />} />
            <Route path='/playlist/edit' element={<EditPlaylist api={API} />} />
            <Route path='/songs' element={<Songs api={API}/>}/>
            <Route path='/songs/:id' element={<ShowSingleSong api={API}/>}/>

            <Route path='/songs/new' element={<NewSong api={API} />}/>
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
