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
          <Card tag="GADGETS" headLine="New Action Game Refreshed With a Premium Hi-Fi Sound" desc="We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to our homestay family’s small dining..." date="AUGUST 7, 2019" src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/30.jpg" />
          <Card tag="GADGETS" headLine="New Action Game Refreshed With a Premium Hi-Fi Sound" desc="We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to our homestay family’s small dining..." date="AUGUST 7, 2019" src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/30.jpg" />
          <Card tag="GADGETS" headLine="New Action Game Refreshed With a Premium Hi-Fi Sound" desc="We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to our homestay family’s small dining..." date="AUGUST 7, 2019" src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/30.jpg" />
          <Card tag="GADGETS" headLine="New Action Game Refreshed With a Premium Hi-Fi Sound" desc="We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to our homestay family’s small dining..." date="AUGUST 7, 2019" src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/30.jpg" />
        </div>
        <div className="sec2">
          <div className="recent-article">
            <h2>Recent Articles</h2>
            <div className="articles">
              <ArticleCard title="Another Big Apartment Project Slated for Broad Ripple Company" tag="INTERIOR" date="AUGUST 7, 2019" />
              <ArticleCard title="Another Big Apartment Project Slated for Broad Ripple Company" tag="INTERIOR" date="AUGUST 7, 2019" />
              <ArticleCard title="Another Big Apartment Project Slated for Broad Ripple Company" tag="INTERIOR" date="AUGUST 7, 2019" />
              <ArticleCard title="Another Big Apartment Project Slated for Broad Ripple Company" tag="INTERIOR" date="AUGUST 7, 2019" />
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
