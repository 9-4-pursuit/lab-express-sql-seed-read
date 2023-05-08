import { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export default function SongEditForm() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [ songs, setSongs ] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false,
    });

    const updateSong = (updatedSong) => {
        axios
        .put(`${API}/songs/${id}`, updatedSong)
        .then(
        () => {
          navigate(`/songs/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (e) => {
    setSongs({ ...songs, [e.target.id]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setSongs({ ...songs, is_favorite: !songs.is_favorite });
  };


  useEffect(() => {
    axios.get(`${API}/songs/${id}`).then(
      (res) => setSongs(res.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);


  const handleSubmit = (e) => {
    e.preventDefault();
    updateSong();
  };

  return (
    <div className='edit'>
        <h1>Edit Song Form</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Title of Song:</label>
        <input
          id="name"
          value={songs.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Title of Song"
          required
        />

        <label htmlFor="artist">Name of Artist:</label>
        <input
          id="artist"
          type="text"
          value={songs.artist}
          placeholder="Artist"
          onChange={handleTextChange}
        />

        <label htmlFor="album">Name of Album:</label>
        <input
          id="album"
          type="text"
          value={songs.album}
          placeholder="album"
          onChange={handleTextChange}
        />
        
        <label htmlFor="album">Time:</label>
        <input
          id="time"
          type="text"
          value={songs.time}
          placeholder="0:00"
          onChange={handleTextChange}
        />

        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={songs.is_favorite}
        />

        <br />

        <input type="submit" />
      </form>
      <Link to={`/songs/${id}`}>
        <button>Oops, Nevermind!</button>
      </Link>
    </div>
  );
};