import {BrowserRouter, Routes, Route} from "react-router-dom"

import NavBar from "./Components/NavBar.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>

        <main>
          <Routes>
            <Route path="/" element={""}/>
            <Route path="/songs" element={""}/>
            <Route path="/songs/new" element={""}/>
            <Route path="/songs/:id/edit" element={""}/>
            <Route path="*" element={""}/>
            
          </Routes>
        </main>
        
        <h1>Tuner App</h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
