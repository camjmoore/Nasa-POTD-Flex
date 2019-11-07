import React from "react";

const NasaImg = (prop) => {
  return(
    <div className="APODDiv">
      <img className="APOD" alt="NASA APOD" src={prop.imgURL}/>
    </div>
  )
}

export default NasaImg