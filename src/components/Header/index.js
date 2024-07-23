// Write your JS code here
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="nav-bar">
    <div className="logo-container">
      <img
        className="logo-img"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <h1 className="main-heading">Wave</h1>
    </div>
    <ul className="list-prop">
      <li className="list-el">
        <Link to="/">Home</Link>
      </li>
      <li className="list-el">
        <Link to="/about">About</Link>
      </li>
      <li className="list-el">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
)

export default Header
