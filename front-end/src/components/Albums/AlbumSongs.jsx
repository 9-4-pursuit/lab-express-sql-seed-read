

import { Link } from "react-router-dom";

function AlbumSongs({ song, index }) {
  const { id, name, time, is_favorite } = song;
  
  return (
    <tr>
      <td>
        {
          is_favorite
          ? "⭐️"
          : ""
        }
      </td>
      <td>{index + 1}</td>
      <td>
        <Link to={`/songs/${id}`}>
          {name}
        </Link>
      </td>
      <td>{time}</td>
    </tr>
  );
}

export default AlbumSongs;