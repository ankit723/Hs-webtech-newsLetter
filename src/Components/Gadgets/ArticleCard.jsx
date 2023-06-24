import React from 'react'
import {Link} from 'react-router-dom'
import './ArticleCard.css'
const ArticleCard = (props) => {
  return (
    <div className="article-card">
      <Link to="#" className="article-title">
        {props.title}
      </Link>
      <div className="article-footer">
      <Link to="#" className="tag">
      {props.tag}
      </Link>
      
      <div className="date">{props.date}</div>
      </div>
    </div>
  )
}

export default ArticleCard