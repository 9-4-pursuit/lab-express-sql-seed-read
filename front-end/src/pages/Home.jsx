import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to the Home page!</h1>
      <p>
        <Link to="/albums">
          View all the Albums!
        </Link>
      </p>
      <p>
        <Link to="/songs">
          View all the Songs!
        </Link>
      </p>
    </div>
  )
}

export default Home;