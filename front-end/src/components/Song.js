import { Link } from "react-router-dom";
// import "../Css/Songs.css"

function Song({ song }) {
  return (
    <div className="song">
      <Link to={`/songs/${song.id}`} className="song-link">
        {song.name}
      </Link>
      <span className="song-artist">{song.artist}</span>
      <span className="song-album">{song.album}</span>
      <span className="song-time">{song.time}</span>
      {song.is_favorite && <span className="song-favorite"></span>}
    </div>
  );
}

export default Song;
