import { Link } from "react-router-dom"

export default function Song({ song }) {

    //name, artist, album, time, is_favorite
    return (
        <tr className="Song">
            <td><Link to={`/songs/${song.id}`}>{song.name}</Link></td>
            <td>        {song.is_favorite ? (
                <span>⭐️</span>
            ) : (
                <span>&nbsp; &nbsp; &nbsp;</span>
            )}</td>
            <td>{song.artist}</td>
            <td>{song.time}</td>
        </tr>
    )
}