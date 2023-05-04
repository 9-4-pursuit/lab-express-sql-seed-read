import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

//Component
import NavBar from './Components/NavBar'

//Pages
import Home from "./Pages/Home"
import Show from "./Pages/Show"
import Index from './Pages/Index'
import New from './Pages/New'
import Edit from "./Pages/Edit"
import FourOFour from "./Pages/FourOFour"



export default function App() {
  return (
    <div className='App-Front'>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Index />} />
            <Route path="/songs/new" element={<New />} />
            <Route path="/songs/:id" element={<Show />} />
            <Route path="/songs/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>

      </Router>
    </div>
  )
}
