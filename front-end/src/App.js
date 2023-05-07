import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import Songs from "./Components/Songs";
import SongDetails from "./Components/SongDetails";
import SongForm from "./Components/SongForm";
import Home from "./Components/Home";
import EditSong from "./Components/SongEdit";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/songs/:id" element={<SongDetails />} />
        <Route path="/songs/new" element={<SongForm />} />
        <Route path="/songs/:id/edit" element={<EditSong />} />
      </Routes>
    </div>
  );
}

export default App;
