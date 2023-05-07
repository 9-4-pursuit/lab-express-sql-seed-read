import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
// const { getAllSongs, getSong, createSong, deleteSong, updateSong } = require('../queries/songs');

export default function SongDetails() {
    const [ songs, setSongs ] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();
    const API = process.env.REACT_APP_API_URL;
    
    useEffect(() => {
        axios
        .get(`${API}/songs/${id}`)
        .then((res) => {
            console.log(res.data);
            setSongs(res.data);
        }).catch((e) => {
            console.warn('catch', e)
        })
    }, [id, API]);


    const deleteSong = () => {
        axios.delete(`${API}/songs/${id}`)
        .then(() => {
            navigate(`/songs`);
        },
        (error) => console.error(error)
        )
        .catch((c) => console.warn('catch', c));
    };

    const handleDelete = () => {
        deleteSong();
    }

  return (
    <div className='song-details'>
    <Container>
        <h2>{songs.name}</h2>
        <p>{songs.artist}</p>
        <p>{songs.album}</p>
        <p>{songs.is_favorite ? <span>⭐️</span> : null} {songs.name}</p>
        <p>{songs.time}</p>
    
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/songs`} >
          <button>BACK</button>
          </Link>

          <Link to={`/songs/${id}/edit`} >
          <button>EDIT</button>
          </Link>
          <button onClick={handleDelete}>DELETE</button>
        </div>
    </div>
    </Container>
  </div>
  );
};
