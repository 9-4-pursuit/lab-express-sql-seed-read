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
    <div>
      
    </div>
  )
}

