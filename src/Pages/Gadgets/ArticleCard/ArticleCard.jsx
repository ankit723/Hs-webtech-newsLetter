import React from 'react'
import {Link} from 'react-router-dom'
import './ArticleCard.css'
const ArticleCard = () => {
  return (
    <div className="article-card">
                <Link to="#" className="article-title">
                  Another Big Apartment Project Slated for Broad Ripple Company
                </Link>
                <div className="article-footer">
                <Link to="#" className="tag">
                INTERIORS
                </Link>
                
                <div className="date">AUGUST 7, 2019</div>
                </div>
              </div>
  )
}

export default ArticleCard