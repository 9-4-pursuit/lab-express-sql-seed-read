import {useRef} from 'react'
import { useOverflow } from "../customHooks/useOverflow"

export default function Song({ song }) {
const ref = useRef()
const overflow = useOverflow(ref)
console.log(song.name, overflow)

  return (
    <li key={`song${song.id}`}>
      <aside ref={ref}>
        <p className='song-details'>
          {song.name}
          {song.album ? ` - ${song.album}` : null}
        </p>
        <p className='sub-p'>Time: {song.time}</p>
      </aside>
      <button>✏️</button>
    </li>
  )
}
