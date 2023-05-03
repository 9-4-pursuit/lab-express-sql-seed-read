import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import Songs from "./Components/Songs";
import SongDetails from "./Components/SongDetails";
import SongForm from "./Components/SongForm";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/songs" element={<Songs />} />
        <Route path="/songs/:index" element={<SongDetails />} />
        <Route path="/songs/new" element={<SongForm />} />
      </Routes>
      <h1>Tuner App</h1>
    </div>
  );
}

export default App;
