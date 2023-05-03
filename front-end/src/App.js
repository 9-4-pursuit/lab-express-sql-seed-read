import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import Songs from "./Components/Songs";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/songs" element={<Songs />} />
      </Routes>
      <h1>Tuner App</h1>
    </div>
  );
}

export default App;
