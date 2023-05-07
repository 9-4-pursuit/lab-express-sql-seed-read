import {Link} from "react-router-dom"

export default function Song( { song } ) {


  return (

    <tr>
        {" "}
      <td>
        {song.is_favorite ? 
        (<span>🌟</span>) : 
        (<span>&nbsp; &nbsp; &nbsp;</span>)}
      </td>

      <td>
        <Link className="SongLinks" to={`/songs/${song.id}`}>{song.name}</Link>
      </td>
      
      <td className="artist">
          {song.artist}
      </td>

      <td className="album">
        {song.album}
      </td>

      <td className="time">
          {song.time}
      </td>
    </tr>
  )
}
