import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="container">
    <div className="icon-container">
      <img
        src={'https://assets.ccbp.in/frontend/react-js/wave-logo-img.png'}
        alt="Wave"
        className="wave-icon"
      />
      <p className="text">Wave</p>
    </div>
    <ul className="text-container">
      <li>
        <Link to="/" className="link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="link">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="link">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
