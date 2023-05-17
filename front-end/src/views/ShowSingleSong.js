import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function ShowSingleSong({ api }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [song, setSong] = useState({});
  useEffect(() => {
    axios.get(`${api}/songs/${id}`).then(res => setSong(res.data));
  },[]);
  const handleDelete = () => {
    axios.delete(`${api}/songs/${id}`).then(_=> navigate('/songs'));
  };
  return (
    <div className='song-view Song-Details'>
      <Link to='/songs'>Back</Link>
      <section>
        {song && (
          <div key={`song-${song.id}`}>
            {song.is_favorite ? (
                    <span>⭐️</span>
                  ) : (
                    <span>&nbsp; &nbsp; &nbsp;</span>
                  )}
            <h3>
              {song.name}
              {song.album ? `-${song.album}` : null}
            </h3>
            <h4>{song.artist}</h4>
            <span>time: {song.time}</span>
          </div>
        )}
        <button onClick={handleDelete}>Delete</button>
      </section>
    </div>
  );
}
