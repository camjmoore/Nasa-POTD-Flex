import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaImg from "./nasaImage";

function NasaInfo() {
  const [imageIs, setImage] = useState('image goes here');

  const [textIs, setText] = useState('text referencing the apparent image');

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=w420QqAmmrBhoyGgNXdqayiuPuDmQA0iBGIs3nJO')
      .then( response => {
        setImage(response.data.url)
      })
      .catch( error => {
        console.log( 'We could not find the picture of the day', error)
      })
  },[imageIs])


  return (
    <div className="container">
      <NasaImg imgURL={imageIs}/>
    </div>

  )
}

export default NasaInfo;