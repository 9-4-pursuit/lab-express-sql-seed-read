import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function Songs({ api }) {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    axios.get(`${api}/songs`).then(res => setSongs(res.data));
  }, []);
  console.log(songs);
  return (
    <div className='song-view'>
      <h1>All Songs</h1>
      <Link to='/songs/new'>New Song</Link>
      {songs &&
        songs.map(song => (
          <div className='Song' key={`song-${song.id}`}>
            <Link to={`/songs/${song.id}`}>
              <tr className='Song'>
                <td>{song.name}</td>
                <td>{song.artist}</td>
                <td>{song.time}</td>
                <td>
                  {song.is_favorite ? (
                    <span>⭐️</span>
                  ) : (
                    <span>&nbsp; &nbsp; &nbsp;</span>
                  )}
                </td>
                <td>
                  <Link to={`/songs/${song.id}`}>✏️</Link>
                </td>
              </tr>
            </Link>
            <h4>{song.artist}</h4>
            <span>time: {song.time}</span>
          </div>
        ))}
    </div>
  );
}
