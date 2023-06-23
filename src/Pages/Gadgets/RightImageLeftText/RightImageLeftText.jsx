/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'
import './RightImageLeftText.css'

const RightImageLeftText = () => {
  return (
    <div className='card'>
      <div className='content'>
        <Link to="/gadgets" className='title'>Gadgets</Link>
        <Link to="/gadgets/post" className='head-line'>New Action Game Refreshed With a Premium Hi-Fi Sound</Link>

        <div className='desc'>We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to our homestay family’s small dining...</div>
        <div className='date'>AUGUST 7, 2019</div>
      </div>
      <img src='https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/30-696x392.jpg' />

    </div>
  )
}

export default RightImageLeftText