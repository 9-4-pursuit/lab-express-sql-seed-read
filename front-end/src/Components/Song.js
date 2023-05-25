import { Link } from "react-router-dom";

function Song({ song }) {
  return (
    <tr>
      <td>{song.id}</td>
      <td>
        <Link
          to={`/songs/${song.id}`}

        >
          {song.name}
        </Link>
      </td>
      <td>{song.artist}</td>
      <td>{song.album}</td>
      <td>{song.time}</td>
      <td>
        {song.is_favorite ? <span> ⭐️ </span> : <span> &nbsp;&nbsp; </span>}
      </td>
    </tr>
  );
}

export default Song;
