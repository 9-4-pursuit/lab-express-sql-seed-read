// DEPENDENCIES
import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS
import NavBar from "./components/NavBar";

// PAGES
import Edit from "./Pages/Edit";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Index />} />
            <Route path="/songs/new" element={<New />} />
            <Route path="*" element={<Error />} />
            <Route path="/songs/:id" element={<Show />} />
            <Route path="/songs/:id/edit" element={<Edit />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;