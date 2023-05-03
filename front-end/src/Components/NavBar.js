import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <nav className="Navbar">
            <h1>
                <Link to="/songs">Songs</Link>
            </h1>
        </nav>
    )
}