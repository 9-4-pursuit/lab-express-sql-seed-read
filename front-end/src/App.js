import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Songs from './Components/Songs';
import SongDetails from './Components/SongDetails'
import NewSongForm from './Components/NewSongForm'
import EditSongForm from './Components/EditSongForm'

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Songs />} />
            <Route path="/songs/:id" element={<SongDetails />} />
            <Route path="/songs/new" element={<NewSongForm />} />
            <Route path="/songs/:id/edit" element={<EditSongForm />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
