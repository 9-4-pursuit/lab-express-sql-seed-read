import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to the Home page!</h1>
      <Link to="/songs">
        View all the Songs!
      </Link>
    </div>
  )
}

export default Home;