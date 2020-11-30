import React, { useEffect } from "react"

function Mars() {
  return (
    <>
      <div className="planet planetMars">
        <h2>Mars</h2>
        <div className="container">
          <div className="loader">
            <span></span>
          </div>
          <div className="mars"></div>
        </div>
      </div>
    </>
  )
}

export default Mars
