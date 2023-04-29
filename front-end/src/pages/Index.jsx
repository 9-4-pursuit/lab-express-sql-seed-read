import { Link } from "react-router-dom";
import Songs from "../components/Songs.jsx";

function Index() {
  return (
    <div>
      <h1>Index</h1>
      <button>
        <Link to={`/songs/new`}>New Song</Link>
      </button>

      <Songs />
    </div>
  );
}

export default Index;