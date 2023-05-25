import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/">The Tuner App</Link>
      </h1>
      <ul>
        <li>
          <Link to="/songs">View All Songs</Link>
        </li>

        <li>
          <Link to="/songs/new">Add New Song</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;