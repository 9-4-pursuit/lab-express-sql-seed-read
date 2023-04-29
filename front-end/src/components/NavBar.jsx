import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">
        <h1>Tuner App</h1>
      </Link>
    </nav>
  )
}

export default NavBar;