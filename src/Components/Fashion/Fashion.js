import React from 'react';
import './Fashion.css';
import VideoTopBottomText from "./VideoTopBottomText"
import ImageLeftRightText from './ImageLeftRightText';
import Addemo from "../../Icons/googleAddDemoSquare.jpg"
import footerDemo from "../../Icons/demoFooter.jpg"

export default function Fashion(props) {
    const MostRead=[
        {title:"Patricia Urquiola Coats Transparent Glas Tables for Livings"}, 
        {title:"Patricia Urquiola Coats Transparent Glas Tables for Livings"}, 
        {title:"Patricia Urquiola Coats Transparent Glas Tables for Livings"}, 
        {title:"Patricia Urquiola Coats Transparent Glas Tables for Livings"}, 
        {title:"Patricia Urquiola Coats Transparent Glas Tables for Livings"}]
    
  return (
    <div className='fluid-container'>
        <div className="fluid-container bg">
            <div className="container Heading d-flex justify-content-center" style={{maxWidth:"74rem"}}>
                <div className="container">
                <div className="head-sec">
                  <h1 style={{color:'white'}}>FASHION</h1>
                     <ul>
                       <li>
                       <button type="button" class="btn btn-primary">New Look</button>
                       </li>
                       <li>
                       <button type="button" class="btn btn-primary">Street Fashion</button>
                       </li>
                       <li>
                       <button type="button" class="btn btn-primary">Style Hunter</button>
                       </li>
                       <li>
                       <button type="button" class="btn btn-primary">Vogue</button>
                       </li>
                     </ul>
                </div>

                    <p style={{fontSize:"1.3rem",color:"white",fontstyle: "italic"}}>Custom category description. You must learn one thing. The world was made to be free in. Give up all the other worlds Except the one in which you belong.</p>
                </div>
            </div>
        </div>
               
           
        <div className="container main-Blog d-flex justify-content-center my-5">
            
            <div className="BlogPosts d-flex justify-content-center">             
                 <div className="container mx-3">
                     <VideoTopBottomText imageurl={"https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/23-696x464.jpg"} bottomText={'Fashion Outfit Ideas From the Biggest Instagram Influencers'} author={"Priyanka"} date={"August 7, 2023"}/>
                     <VideoTopBottomText imageurl={"https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/38.jpg"} bottomText={'Fashion Outfit Ideas From the Biggest Instagram Influencers'} author={"Priyanka"} date={"August 7, 2023"}/>
                     <VideoTopBottomText imageurl={"https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/38.jpg"} bottomText={'Fashion Outfit Ideas From the Biggest Instagram Influencers'} author={"Priyanka"} date={"August 7, 2023"}/>
                     <VideoTopBottomText imageurl={"https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/38.jpg"} bottomText={'Fashion Outfit Ideas From the Biggest Instagram Influencers'} author={"Priyanka"} date={"August 7, 2023"}/>
                 </div>
                 
                 <div className="container mx-3">
                    <VideoTopBottomText imageurl={"https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/38.jpg"} bottomText={'Fashion Outfit Ideas From the Biggest Instagram Influencers'} author={"Priyanka"} date={"August 7, 2023"}/>
                    <VideoTopBottomText imageurl={"https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/38.jpg"} bottomText={'Fashion Outfit Ideas From the Biggest Instagram Influencers'} author={"Priyanka"} date={"August 7, 2023"}/>
                    <VideoTopBottomText imageurl={"https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/38.jpg"} bottomText={'Fashion Outfit Ideas From the Biggest Instagram Influencers'} author={"Priyanka"} date={"August 7, 2023"}/>
                    <VideoTopBottomText imageurl={"https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/38.jpg"} bottomText={'Fashion Outfit Ideas From the Biggest Instagram Influencers'} author={"Priyanka"} date={"August 7, 2023"}/>
                 </div>
            </div>

            <div className="SideBar">
                    <div className="addContainer">
                        <img src={Addemo} alt="Addvertisment" style={{width:"20rem",maxWidth:"100%", height:"auto"}}/>
                    </div>

                    <div className="MostRead my-5">
                        <div className="Heading border-bottom border-dark"><span className="bg-dark text-light px-2 py-1">MOST READ</span></div>

                        <ul className="p-0">
                            {MostRead.map(read=>(<li className="list-group-item my-4" style={{maxWidth:"27rem"}}>
                                <ImageLeftRightText imgSize={"6rem"} textSize={"1rem"} leftImage={read.img} rightText={read.title} author={"Ankit Biswas"} date={"July 10, 2023"}/>
                            </li>))}
                        </ul>
                    </div>
            </div>
        </div>
    </div>
           
  )
}

