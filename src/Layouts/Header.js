import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <>
            <header id="header" className="header d-flex align-items-center">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <a href="index.html" className="logo d-flex align-items-center">
                        <h1>Tech Phoenix Engineering<span>.</span></h1>
                    </a>
                    <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><Link to='/Hero'>Home</Link></li>
                            <li><Link to='/About'>About</Link></li>
                            <li><Link to='/Services'>Services</Link></li>
                            <li><Link to='/Projects'>Projects</Link></li>
                            {/* <li><Link to='/Blog'>Blog</Link></li> */}
                            <li><Link to='/Contact'>Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Hero;