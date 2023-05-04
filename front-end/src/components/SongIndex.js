import { useState, useEffect } from "react";
import Song from "./Song";
// import "../Css/Index.css"

function SongIndex() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/songs`)
      .then((response) => response.json())
      .then((data) => {
        setSongs(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="SongIndex">
    <table className="SongIndex__table">
        <thead>
          <tr>
          <th className="SongIndex__table-header">#</th>
            <th className="SongIndex__table-header">Title</th>
            <th className="SongIndex__table-header">Artist</th>
            <th className="SongIndex__table-header">Album</th>
            <th className="SongIndex__table-header">Duration</th>
            <th className="SongIndex__table-header">Favorite</th>
          </tr>
        </thead>
        <tbody>
          {songs
            ? songs.map((song) => {
                return <Song key={song.id} song={song} />;
              })
            : null}
        </tbody>
      </table>
    </div>
  );
}

export default SongIndex;