import React from 'react'
import './navbar.css'
import wave from '../assets/wave (4).svg'
export default function Navbar() {
  return (
    <nav>
      <header>
      <div className='logo'>
      <p>create your playlist</p>
      </div>
        <h1 id='title'>tuner</h1>
        
      </header>
      <div className='wave-container'>
        <img src={wave} alt='wave' />
      </div>
    
    </nav>
  )
}
