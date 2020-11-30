import React from "react"
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div className="navbar-wrap">
      <ul className="navbar">
        <li className="nav-menu">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-menu">
          <Link to="/mars">Mars</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
