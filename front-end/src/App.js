import {BrowserRouter, Routes, Route} from "react-router-dom"

import NavBar from "./Components/NavBar.js";
import Home from "./Pages/Home.js";
import Index from "./Pages/Index.js";
import Show from "./Pages/Show.js";
import New from "./Pages/New.js"
import Edit from "./Pages/Edit.js";
import ErrorPage from "./Pages/ErrorPage.js";
 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>

        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/songs" element={<Index/>}/>
            <Route path="/songs/:id" element={<Show/>}/>
            <Route path="/songs/new" element={<New/>}/>
            <Route path="/songs/:id/edit" element={<Edit/>}/>
            <Route path="*" element={<ErrorPage/>}/>
            
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
