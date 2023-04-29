import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function SongDetails() {
  const [theSong, setTheSong] = useState([]);
  const { name, artist, album, time, is_favorite } = theSong;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then(response => setTheSong(response.data))
      .catch(error => console.error("Error: GET", error))
  }, [id]);
  
  return (
    <div>SongDetails</div>
  );
}

export default SongDetails;