/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'
import './RightImageLeftText.css'

const RightImageLeftText = (props) => {
  return (
    <div className='card'>
      <div className='content'>
        <Link to="/gadgets" className='title'>{props.tag}</Link>
        <Link to="/gadgets/post" className='head-line'>{props.headLine}</Link>

        <div className='desc'>{props.desc}</div>
        <div className='date'>{props.date}</div>
      </div>
      <img src={props.src} />

    </div>
  )
}

export default RightImageLeftText