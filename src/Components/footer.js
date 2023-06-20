import React from "react";
import LeftImageRightText from "./leftImageRightText";
import footerDemo from "../Icons/demoFooter.jpg"
import headTitleLight from "../Icons/Head-Title-Light.webp"

export function Footer(){
    return(
        <footer>
            <div className="container border-bottom py-3">
                <ul className="footer1 d-flex justify-content-around list">
                    <li className="footer-list1 list-group-item">
                        <h5>EDITOR PICKS</h5>
                        <ul className="p-0">
                            <li className="list-group-item my-3" style={{maxWidth:"27rem"}}>
                                <LeftImageRightText imgSize={"6rem"} textSize={"1rem"} leftImage={footerDemo} rightText={"Discover the Most Magical Sunset in Santorini"}/>
                            </li>

                            <li className="list-group-item my-3" style={{maxWidth:"27rem"}}>
                                <LeftImageRightText imgSize={"6rem"} textSize={"1rem"} leftImage={footerDemo} rightText={"Discover the Most Magical Sunset in Santorini"}/>
                            </li>

                            <li className="list-group-item my-3" style={{maxWidth:"27rem"}}>
                                <LeftImageRightText imgSize={"6rem"} textSize={"1rem"} leftImage={footerDemo} rightText={"Discover the Most Magical Sunset in Santorini"}/>
                            </li>
                        </ul>
                    </li>

                    <li className="footer-list1 list-group-item">
                        <h5>POPULAR POSTS</h5>
                        <ul className="p-0">
                            <li className="list-group-item my-3" style={{maxWidth:"27rem"}}>
                                <LeftImageRightText imgSize={"6rem"} textSize={"1rem"} leftImage={footerDemo} rightText={"Discover the Most Magical Sunset in Santorini"}/>
                            </li>

                            <li className="list-group-item my-3" style={{maxWidth:"27rem"}}>
                                <LeftImageRightText imgSize={"6rem"} textSize={"1rem"} leftImage={footerDemo} rightText={"Discover the Most Magical Sunset in Santorini"}/>
                            </li>

                            <li className="list-group-item my-3" style={{maxWidth:"27rem"}}>
                                <LeftImageRightText imgSize={"6rem"} textSize={"1rem"} leftImage={footerDemo} rightText={"Discover the Most Magical Sunset in Santorini"}/>
                            </li>
                        </ul>
                    </li>

                    <li className="footer-list1 list-group-item">
                        <h5>POPULAR CATEGORY</h5>
                        <ul className="p-0">
                            <li className="list-group-item d-flex justify-content-between" style={{maxWidth:"27rem"}}>
                                <p>Racing</p>
                                <h6 className="mx-3">20</h6>
                            </li>

                            <li className="list-group-item d-flex justify-content-between" style={{maxWidth:"27rem"}}>
                                <p>Travel</p>
                                <h6 className="mx-3">15</h6>
                            </li>
                            
                            <li className="list-group-item d-flex justify-content-between" style={{maxWidth:"27rem"}}>
                                <p>Interiors</p>
                                <h6 className="mx-3">15</h6>
                            </li>

                            <li className="list-group-item d-flex justify-content-between" style={{maxWidth:"27rem"}}>
                                <p>Architecture</p>
                                <h6 className="mx-3">15</h6>
                            </li>

                            <li className="list-group-item d-flex justify-content-between" style={{maxWidth:"27rem"}}>
                                <p>Make it Modern</p>
                                <h6 className="mx-3">15</h6>
                            </li>

                            <li className="list-group-item d-flex justify-content-between" style={{maxWidth:"27rem"}}>
                                <p>Decorating</p>
                                <h6 className="mx-3">15</h6>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            
            <div className="container py-3">
                <ul className="footer2 d-flex justify-content-around list align-items-center">
                    <li className="list-group-item ">
                        <img src={headTitleLight} alt="Main Blog Title" style={{width:"15rem"}}/>
                    </li>

                    <li className="list-group-item">
                        <h5>ABOUT US</h5>
                        <ul className="p-0">
                            <li className="footer-list2 list-group-item my-3 d-flex" style={{maxWidth:"27rem"}}>
                                <p>Newspaper is your news, entertainment, music fashion website. We provide you with the latest breaking news and videos straight from the entertainment industry.</p>
                            </li>

                            <li className="footer-list2 list-group-item my-3 d-flex" style={{maxWidth:"27rem"}}>
                                <p>Contact us: <a href="contact@yoursite.com">contact@yoursite.com</a></p>
                            </li>
                        </ul>
                    </li>

                    <li className="footer-list2 list-group-item">
                        <h5>POPULAR CATEGORY</h5>
                        <ul className="p-0 ">
                            <li className="list-group-item d-flex" style={{maxWidth:"27rem"}}>
                                <i class="bi bi-meta px-3 py-2 mx-3" style={{backgroundColor:"whitesmoke", color:"black"}}></i>
                                <i class="bi bi-instagram px-3 py-2 mx-3" style={{backgroundColor:"whitesmoke",color:"black"}}></i>
                                <i class="bi bi-vimeo px-3 py-2 mx-3" style={{backgroundColor:"whitesmoke", color:"black"}}></i>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

        </footer>
    )
}

export default Footer;