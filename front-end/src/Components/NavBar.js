import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="NavBar">
      <h1>
        <Link to="/songs">Songs</Link>
      </h1>
      <button>
        <Link to="/songss/new">New Song</Link>
      </button>
    </nav>
  );
}