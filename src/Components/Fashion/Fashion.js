import React, {useEffect, useState} from 'react';
import './Fashion.css';
import VideoTopBottomText from "./VideoTopBottomText"
import ImageLeftRightText from './ImageLeftRightText';
import Addemo from "../../Icons/googleAddDemoSquare.jpg"
import footerDemo from "../../Icons/demoFooter.jpg"

export default function Fashion(props) {
    const [fashionPost, setFashionPost]=useState([])

    const MostRead=[
        {title:"Patricia Urquiola Coats Transparent Glas Tables for Livings"}, 
        {title:"Patricia Urquiola Coats Transparent Glas Tables for Livings"}, 
        {title:"Patricia Urquiola Coats Transparent Glas Tables for Livings"}, 
        {title:"Patricia Urquiola Coats Transparent Glas Tables for Livings"}, 
        {title:"Patricia Urquiola Coats Transparent Glas Tables for Livings"}]

    const getNews = async () => {
        const res = await fetch("http://localhost:5000/fashionP", {
            method: "GET"
        });
        const data = await res.json();
        setFashionPost(data)
    }
    
    useEffect(() => {
        getNews();
    }, []);
    
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
                
                <div className="container mx-3">
                    {fashionPost.length > 0 ? (
                    <div className="row">
                        {fashionPost.map(post => (
                            post.item === "LATEST NEWS" ? (
                                <div key={post._id} className="col-md-6">
                                    <VideoTopBottomText
                                        imageurl={`http://localhost:5000/uploads/${post.image}`}
                                        footTextSize="13px"
                                        imgSize="250px"
                                        bottomText={post.head}
                                        author={post.admin}
                                        date={post.date}
                                    />
                                </div>
                            ) : null
                        ))}
                    </div>
                    ) : (
                        console.log("What the Fuck")
                    )}
                </div>


                <div className="SideBar">
                        <div className="addContainer">
                            <img src={Addemo} alt="Addvertisment" style={{width:"20rem",maxWidth:"100%", height:"auto"}}/>
                        </div>

                        <div className="MostRead my-5">
                            <div className="Heading border-bottom border-dark"><span className="bg-dark text-light px-2 py-1">MOST READ</span></div>

                            <div className="container mx-3">
                                {fashionPost.length>0?
                                    (fashionPost.map(post=>
                                        (post.item==="Most Read"?
                                            <ImageLeftRightText key={post._id} imageurl={`http://localhost:5000/uploads/${post.image}`} footTextSize="13px" imgSize="250px" rightText={post.para} author={post.admin} date={post.date}/>:
                                            console.log("what the Fuck")
                                    )    
                                    )):
                                    null
                                }
                                
                            </div>
                        </div>
                </div>
            </div>
        </div>
            
    )
}

