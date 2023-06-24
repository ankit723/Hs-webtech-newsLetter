import React from 'react'
import './Fashion.css';

export default function VideoTopBottomText(props) {
  return (

    <div className="App">
      <div className="d-flex-flex-column"style={{maxWidth:"20rem"}}>
          <img src={props.imageurl} alt="New Blog Image" style={{width:`${props.imgSize}`, maxWidth:"100%", height:"auto"}}/>
          <h5 style={{fontSize:`${props.headTextSize}`}}>{props.bottomText}</h5>
          <h6>{`${props.author} - ${props.date}`}</h6>
          <p style={{fontSize:`${props.paraTextSize}`}}>{props.paragraph}</p>
      </div>
    </div>
  )
}
