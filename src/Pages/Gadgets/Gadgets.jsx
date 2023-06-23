import React from "react";
import { Link } from "react-router-dom";
import "./Gadgets.css";
import Card from "../../Components/Gadgets/RightImageLeftText";
import ArticleCard from '../../Components/Gadgets/ArticleCard';

const Gadgets = () => {
  return (
    <div className="container">
      <div className="head-sec">
        <h1>Gadgets</h1>
        <ul>
          <li>
            <Link to="/gadgets">GADGETS</Link>
          </li>
          <li>
            <Link to="/mobilephones">MOBILE PHONES</Link>
          </li>
          <li>
            <Link to="/photography">PHOTOGRAPHY</Link>
          </li>
          <li>
            <Link to="/reviews">REVIEWS</Link>
          </li>
        </ul>
      </div>
      <div className="main-sec">
        <div className="sec1">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="sec2">
          <div className="recent-article">
            <h2>Recent Articles</h2>
            <div className="articles">
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
            </div>
          </div>
          <div className="advertisement">
            Advertisement Goes Here
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
