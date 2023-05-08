import Song from './Song';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Songs() {
    const [ songs, setSongs ] = useState([]);

    const API = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios
        .get(`${API}/songs`)
        .then((res) => {
            setSongs(res.data);
        })
        .catch((e) => console.warn("catch", e))
    }, []);  //[API ?]
 
  return (
    <div className='songs'>
      <h2>List of Songs</h2>
      <div className='song-card'>
        <Table striped bordered hover varient="dark">
          <thead>
            <tr>
              <th>Song Title</th>
              <th>Song Artist</th>
              <th></th>
              <th>Song Time:length</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <Song key={songs.id} song={song} />;
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

