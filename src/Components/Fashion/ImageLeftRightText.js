import React from 'react'

export default function ImageLeftRightText(props) {
  return (
    <div className="d-flex">    
      <h6 className="mx-3" style={{fontSize:`${props.textSize}`, overflow:"hidden"}}>{props.rightText}<h6>{`${props.author} - ${props.date}`}</h6></h6>
    </div>
  )
}
