// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <ul className="flex">
    <li className="logo">
      <img
        className="logo-img"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <h1>Wave</h1>
    </li>
    <li className="sections">
      <Link className="section" to="/">
        <button className="section-btn" type="button">
          Home
        </button>
      </Link>
      <Link className="section" to="/about">
        <button className="section-btn" type="button">
          About
        </button>
      </Link>
      <Link className="section" to="/contact">
        <button className="section-btn" type="button">
          Contact
        </button>
      </Link>
    </li>
  </ul>
)

export default Header
