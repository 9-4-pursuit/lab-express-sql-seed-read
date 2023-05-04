import {Link} from "react-router-dom";

export default function Song ({song}) {
  return (<tr className="Song">
    <td className="title">
      <Link to={`/songs/${song.id}`}>{song.name}</Link>
    </td>
    <td className="favorite">{song.is_favorite ? <span>⭐️</span> : <span>&nbsp; &nbsp; &nbsp;</span>}</td>
    <td className="artist">{song.artist}</td>
    <td className="duration">{song.time}</td>
  </tr>);
}