import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Error from "./pages/Error.jsx";

import Songs from "./components/Songs/Songs.jsx";
import NewSong from "./components/Songs/NewSong.jsx";
import SongDetails from "./components/Songs/SongDetails.jsx";
import EditSong from "./components/Songs/EditSong.jsx";

import Albums from "./components/Albums/Albums.jsx";
import NewAlbum from "./components/Albums/NewAlbum.jsx";
import AlbumDetails from "./components/Albums/AlbumDetails.jsx";
import EditAlbum from "./components/Albums/EditAlbum.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/songs" element={<Songs />} />
            <Route path="/songs/new" element={<NewSong />} />
            <Route path="/songs/:id" element={<SongDetails />} />
            <Route path="/songs/:id/edit" element={<EditSong />} />

            <Route path="/albums" element={<Albums />} />
            <Route path="/albums/new" element={<NewAlbum />} />
            <Route path="/albums/:id" element={<AlbumDetails />} />
            <Route path="/albums/:id/edit" element={<EditAlbum />} />
            
            <Route path="/*" element={<Error />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
