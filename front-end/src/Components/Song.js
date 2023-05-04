import { Link } from "react-router-dom";

export default function Song({ song }) {
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
                {song.name}
            </td>
            <td>
                {song.artist}
            </td>
            <td>
                {song.time}
            </td>
            <td>
                <a href={`/songs/${song.id}`}>✏️</a>
            </td>
        </tr>
    );
};
