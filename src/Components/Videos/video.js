import React from "react";
import TopVideoBottomText from "./topVideoBottomText"
import LeftImageRightText from "../leftImageRightText";
import Addemo from "../../Icons/googleAddDemoSquare.jpg"
import footerDemo from "../../Icons/demoFooter.jpg"



export function Videos(props){
    const posts=[
        {url:"https://www.youtube.com/embed/UpQM2VlPjDw", title:"Video Receipes: How to Make a Perfect Caffe Macchiato"}, 
        {url:"https://www.youtube.com/embed/UpQM2VlPjDw", title:"Video Receipes: How to Make a Perfect Caffe Macchiato"}, 
        {url:"https://www.youtube.com/embed/UpQM2VlPjDw", title:"Video Receipes: How to Make a Perfect Caffe Macchiato"}, 
        {url:"https://www.youtube.com/embed/UpQM2VlPjDw", title:"Video Receipes: How to Make a Perfect Caffe Macchiato"}, 
        {url:"https://www.youtube.com/embed/UpQM2VlPjDw", title:"Video Receipes: How to Make a Perfect Caffe Macchiato"}] 
        
    const posts2=[
        {url:"https://www.youtube.com/embed/UpQM2VlPjDw", title:"Video Receipes: How to Make a Perfect Caffe Macchiato"}, 
        {url:"https://www.youtube.com/embed/UpQM2VlPjDw", title:"Video Receipes: How to Make a Perfect Caffe Macchiato"}, 
        {url:"https://www.youtube.com/embed/UpQM2VlPjDw", title:"Video Receipes: How to Make a Perfect Caffe Macchiato"}, 
        {url:"https://www.youtube.com/embed/UpQM2VlPjDw", title:"Video Receipes: How to Make a Perfect Caffe Macchiato"}, 
        {url:"https://www.youtube.com/embed/UpQM2VlPjDw", title:"Video Receipes: How to Make a Perfect Caffe Macchiato"}]
        
    const MostRead=[
        {img:footerDemo, title:"Patricia Urquiola Coats Transparent Glas Tables for Livings"}, 
        {img:footerDemo, title:"Patricia Urquiola Coats Transparent Glas Tables for Livings"}, 
        {img:footerDemo, title:"Patricia Urquiola Coats Transparent Glas Tables for Livings"}, 
        {img:footerDemo, title:"Patricia Urquiola Coats Transparent Glas Tables for Livings"}, 
        {img:footerDemo, title:"Patricia Urquiola Coats Transparent Glas Tables for Livings"}]

    return(
        <div className="container my-5">
            <div className="container Heading d-flex justify-content-center" style={{maxWidth:"74rem"}}>
                <div className="container">
                    <h2>VIDEO</h2>
                    <p style={{fontSize:"1.3rem"}}>Custom category description. You must learn one thing. The world was made to be free in. Give up all the other worlds Except the one in which you belong.</p>
                </div>
                
            </div>

            <div className="container videosHero d-flex justify-content-center">
                <div className="heroVideo1 mx-1" style={{height:"25rem", width:"35rem", color:"white"}}>
                    <h3 className="mx-3" style={{marginTop:"18rem"}}>After Effects Guru: Tracking and Stabilizing Footage</h3>
                    <span className="mx-3" style={{fontWeight:"bold"}}>Arnim Vans - August 7, 2019</span>
                </div>
                
                <div className="heroVideo2 mx-1" style={{width:"35rem", color:"white"}}>
                    <h3 className="mx-3" style={{marginTop:"18rem"}}>What Happens When Your Carryon is Over the Limit</h3>
                    <span className="mx-3" style={{fontWeight:"bold"}}>Arnim Vans - August 7, 2019</span>
                </div>
            </div>
            
            <div className="container main-Blog d-flex justify-content-center my-5">
                <div className="BlogPosts d-flex justify-content-center">
                    <div className="container">
                        {posts.map(post=>(<TopVideoBottomText videoUrl={post.url} footTextSize="13px" bottomText={post.title} author={"Ankit Biswas"} date={"August 7, 2023"}/>))}
                    </div>
                    
                    <div className="container">
                        {posts2.map(post=>(<TopVideoBottomText videoUrl={post.url} footTextSize="13px" bottomText={post.title} author={"Ankit Biswas"} date={"August 7, 2023"}/>))}
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
                                <LeftImageRightText imgSize={"6rem"} textSize={"1rem"} leftImage={read.img} rightText={read.title} author={"Ankit Biswas"} date={"July 10, 2023"}/>
                            </li>))}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Videos;
