import {Link} from "react-router-dom"

export default function FourOFour() {
  return (
    <div className='FourOFour'>
        <h1> Sorry, the page can not be found!</h1>
        <button className="FourOFour">
          <Link to="/songs" className="Links">Back to Songs</Link>
        </button>
    </div>
  )
}
