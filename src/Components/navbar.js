import React from "react";
import headTitle from "../Icons/Head-Title.webp"
import headTitleLight from "../Icons/Head-Title-Light.webp"
import addDemo from "../Icons/googleAddDemo.jpg"
import { Link } from 'react-router-dom';

export function Navbar(){
    const date = new Date('May 11, 2014');
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dayOfWeek = daysOfWeek[date.getDay()];
    const month = monthsOfYear[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    const formattedDate = `${dayOfWeek}, ${month} ${day},${year}`;
    return(
        <div className="App">
            <header className="border-bottom shadow">
                <div className="header1 py-1 text-bg-dark">
                    <div className="contents container" style={{fontSize:"0.8rem",display:"flex",justifyContent:"space-between"}}>
                        <div className="date-options d-flex justify-content-center">
                            <div className="px-3">
                                <a className="nav-link">{`${formattedDate}`}</a>
                            </div>
                            <div className="px-3 d-flex">
                                <a className="nav-link px-2">sign In/Join</a>
                                <a className="nav-link px-2">Blog</a>
                                <a className="nav-link px-2">Forum</a>
                                <a className="nav-link px-2">Buy Now!</a>
                            </div>
                        </div>

                        <div className="social d-flex">
                            <a className="px-2 nav-link"><i className="bi bi-meta"></i></a>
                            <a className="px-2 nav-link"><i className="bi bi-instagram"></i></a>
                            <a className="px-2 nav-link"><i className="bi bi-twitter"></i></a>
                            <a className="px-2 nav-link"><i className="bi bi-vimeo"></i></a>
                            <a className="px-2 nav-link"><i className="bi bi-youtube"></i></a>
                        </div>
                    </div>
                </div>

                <div className="container header2 d-flex justify-content-center my-2">
                    <div className="title">
                        <a href="/"><img src={headTitle} alt="Head Blog Title" style={{width:"20rem"}}/></a>
                        <a className="text-bg-dark"><img src={addDemo} alt="Head Blog Title"/></a>
                    </div>
                </div>

                <div className="container header3 d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start py-2">

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 link-body-emphasis fw-bold">News</a></li>
                        <li><a href="#" className="nav-link px-2 link-body-emphasis fw-bold">Fashion</a></li>
                        <li><a href="#" className="nav-link px-2 link-body-emphasis fw-bold">Gadgets</a></li>
                        <li><a href="#" className="nav-link px-2 link-body-emphasis fw-bold">Lifestyle</a></li>
                        <li><a href="#" className="nav-link px-2 link-body-emphasis fw-bold">Video</a></li>
                        <li><a href="#" className="nav-link px-2 link-body-emphasis fw-bold">Features</a></li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
                    </form>
                </div>

                <div className="header4 headerForMobileDevices text-bg-dark" style={{display:"none", alignItems:"center"}}>
                    <div className="shortenNav">
                    <h3><a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        <i class="bi bi-list"></i></a></h3>
                    </div>

                    <div className="midHeadTiltle">
                        <img src={headTitleLight} alt="head blog tilte" style={{width:"12rem"}}/>
                    </div>

                    <div className="search">
                        <h3><i class="bi bi-search"></i></h3>
                    </div>
                </div>
            </header>

            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div class="offcanvas-body">
                    <div>
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                    </div>
                    <div class="dropdown mt-3">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            Dropdown button
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;