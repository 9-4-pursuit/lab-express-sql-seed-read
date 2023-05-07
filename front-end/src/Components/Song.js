import { Link } from "react-router-dom";

function Song({ song }) {
  
  return (
    <tr className="Song">
      <td>
        {song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <a href={`/songs/${song.id}`}>{song.name}</a>
      </td>
      <td>
        <p>{song.artist}</p>
      </td>
      <td>
        <p>{song.album}</p>
      </td>
      <td>
        <p>{song.time}</p>
      </td>
    </tr>
  );
}

export default Song;
