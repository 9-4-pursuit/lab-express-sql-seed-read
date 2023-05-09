import { Link } from "react-router-dom";

function Album({ album, index }) {
  const { id, name, artist, is_favorite } = album;

  return (
    <tr className="odd:bg-white even:bg-gray-100 hover:bg-slate-200">
      <td className="px-6 py-2 whitespace-nowrap text-sm">
        {
          is_favorite
          ? "⭐️"
          : ""
        }
      </td>
      <td className="px-6 py-2 whitespace-nowrap text-sm">
        {index + 1}
      </td>
      <td className="px-6 py-2 whitespace-nowrap text-sm">
        <Link to={`/albums/${id}`} className="text-blue-500 hover:underline hover:text-blue-800">
          {name}
        </Link>
      </td>
      <td className="px-6 py-2 whitespace-nowrap text-sm">
        {artist}
      </td>
    </tr>
  );
}

export default Album;