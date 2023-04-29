import { Link } from "react-router-dom";

function Song({ song }) {
  const { id, name, artist, time, is_favorite } = song;

  return (
    <tr>
      <td>
        {
          is_favorite
          ? "⭐"
          : ""
        }
      </td>
      <td>
        <Link to={`/songs/${id}`}>
          {name}
        </Link>
      </td>
      <td>{artist}</td>
      <td>{time}</td>
    </tr>
  );
}

export default Song;