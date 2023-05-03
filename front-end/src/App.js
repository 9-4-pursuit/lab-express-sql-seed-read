import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Songs from './Components/Songs';

function App() {

  // Include /songs route (Index)
  // /songs/:id route (Show)
  // /songs/new (New)
  // /songs/:id/edit

  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Songs />} />
            <Route path="/songs/:id" element={<SongDetails />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
