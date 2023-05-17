import {useRef} from 'react'
import { useOverflow } from "../customHooks/useOverflow"

export default function Song({ song }) {
const ref = useRef()
const overflow = useOverflow(ref)
console.log(song.name, overflow)

  return (
    <li key={`song${song.id}`}>
      <aside ref={ref}>
        <p className={overflow?'song-details overflow':'song-details'}>
          {song.name}
          {song.album ? ` - ${song.album}` : null}
        </p>
        <div className='sub-p'>
            <p>{song.artist}</p>
            <p>Time: {song.time}</p>
            </div>
      </aside>
      <button className='edit-btn'>✏️</button>
    </li>
  )
}
