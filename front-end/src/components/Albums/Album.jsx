import { Link } from "react-router-dom";

function Album({ album, index }) {
  const { id, name, artist, release_date, is_favorite } = album;

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
        <Link to={`/albums/${id}`}>
          {name}
        </Link>
      </td>
      <td>{artist}</td>
    </tr>
  );
}

export default Album;