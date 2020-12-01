import React, { useEffect, useState } from "react"
import Axios from "axios"
import NavBar from "./NavBar"
function NasaPhoto() {
  const [photo, setPhoto] = useState(null)

  useEffect(() => {
    fetchPhoto()
    async function fetchPhoto() {
      try {
        // const response = await Axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}`)
        const response = await Axios.get(`https://api.nasa.gov/planetary/apod?api_key=jwgnQw3JhJUnIVoJvbHlKvOAA6wSKRNJ8ejpiLuZ`)
        setPhoto(response.data)
      } catch (e) {
        console.log(e)
      }
    }
  }, [])

  if (!photo) return <div />

  return (
    <>
      <NavBar />
      <div className="wrapper">
        <h1 className="titile">Astronomy Picture of the Day</h1>
        <div className="content-wrapper">
          <div className="equal image">{photo.media_type === "image" ? <img src={photo.url} alt={photo.title} /> : <iframe title="space-video" src={photo.url} framBoder="0" gesture="media" allow="encrypted-media" allowFullScreen className="photo" />}</div>
          <div className="equal contents">
            <div className="contents-inner">
              <h2>Title: {photo.title}</h2>
              <p className="sp-padding">
                {" "}
                <strong>Date:</strong> {photo.date}
              </p>
              <p className="sp-padding">
                {" "}
                <strong>Explanation:</strong> {photo.explanation}
              </p>
              <p className="sp-padding">
                {" "}
                <strong>Copyright:</strong>
                {photo.copyright}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NasaPhoto
