import { Link } from "react-router-dom";

function Song({ song }) {
  console.log(song)
  return (
    <tr>
      <td>
        {song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>

        <Link to={`/songs/${song.id}`}><p>{song.name}</p></Link>
      </td>
      <td>
          {song.artist}
      </td>
      <td>{song.time}</td>
    </tr>
  );
}

export default Song;