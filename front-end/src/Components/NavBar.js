import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <div className="navBar">
            <Link to={`/songs`}><h2>Songs</h2></Link>
        </div>
    )
}