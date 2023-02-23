import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-content position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-info">
                                <h4>Tech Phoenix Engineering</h4>
                                <p><i class="fa fa-map-marker" style={{ color: "white" }}></i>
                                    <span> Location</span></p>
                                <p>
                                    922, 17, Makarpura GIDC, Makarpura, <br />
                                    Vadodara, Gujarat 390010. <br /><br />
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><Link to='/Hero'>Home</Link></li>
                                <li><Link to='/About'>About</Link></li>
                                <li><Link to='/Services'>Services</Link></li>
                                <li><Link to='/Projects'>Projects</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-3 footer-links">
                            <h4>About Us</h4>
                            <div className="footer-info">
                                <p>
                                    Tech Phoenix Engineering, A Pioneer In Manufacturing (CNC Turning and Milling) And Outsourcing Service.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 footer-links">
                            <h4>Contact</h4>
                            <div className="footer-info">
                                <p>
                                    <strong>Phone:</strong> +91 92651 04833<br />
                                    <strong>Email:</strong> sales@techphoenixengineering.com<br />
                                </p>
                                <div className="social-links d-flex mt-3">
                                    <a href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-twitter"></i></a>
                                    <a href="https://www.facebook.com/techphoenixengineering11620/" className="d-flex align-items-center justify-content-center"><i className="bi bi-facebook"></i></a>
                                    <a href="https://www.instagram.com/tech_phoenix_engineering/?hl=en" className="d-flex align-items-center justify-content-center"><i className="bi bi-instagram"></i></a>
                                    <a href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-legal text-center position-relative">
                    <div className="container">
                        <div className="copyright">
                            &copy; Copyright <strong><span> © 2023 TECHPHOENIXENGINEERING </span></strong>. All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;