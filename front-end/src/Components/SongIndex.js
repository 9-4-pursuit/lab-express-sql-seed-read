import { useState, useEffect } from "react";
import Song from "./Song";

function Songs() {
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
    <div className="Song">
      <table className="Songs">
        <thead>
          <tr>
            <th className="Songs-header">#</th>
            <th className="Songs-header">Title</th>
            <th className="Songs-header">Artist</th>
            <th className="Songs-header">Album</th>
            <th className="Songs-header">Duration</th>
            <th className="Songs-header">Favorite</th>
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

export default Songs;
