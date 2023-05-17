import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './navbar.css'
import wave from '../assets/wave (4).svg'
import home from '../assets/home1.png'



export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  useEffect(()=>{
    console.log(location)
    if(location.pathname==='/'){
      setShow(false)
    }else{
      setShow(true)
    }
  },[location])
  return (
    <nav>
      <header>
        {show&&<button onClick={()=>navigate('/')} className='home-btn'>
        <img src={home} alt='home'/>
        </button>}
      <div className='logo'>
      <p>create your playlist</p>
      </div>
        <h1 id='title'>Tuner</h1>
        
      </header>
      <div className='wave-container'>
        <img src={wave} alt='wave' />
      </div>
    
    </nav>
  )
}
