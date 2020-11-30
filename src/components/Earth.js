import React from "react"
import { Link } from "react-router-dom"

function Earth() {
  return (
    <>
      <div className="planet planetEarth">
        <h2>
          <Link className="space-link" to="/nasaphoto">
            Above The Sky
          </Link>
        </h2>
        <div className="container">
          <div className="loader">
            <span></span>
          </div>
          <div className="earth"></div>
        </div>
      </div>
    </>
  )
}

export default Earth
