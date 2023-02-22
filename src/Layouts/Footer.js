import React from "react";

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-content position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-info">
                                <h4>Tech Phoenix Engineering</h4>
                                <p>
                                922, 17, Makarpura GIDC, Makarpura, <br />
                                Vadodara, Gujarat 390010 <br /><br />
                                    <strong>Phone:</strong> +91 92651 04833<br />
                                    <strong>Email:</strong> sales@techphoenixengineering.com<br />
                                </p>
                                <div className="social-links d-flex mt-3">
                                    <a href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-twitter"></i></a>
                                    <a href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-facebook"></i></a>
                                    <a href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-instagram"></i></a>
                                    <a href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Terms of service</a></li>
                                <li><a href="#">Privacy policy</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><a href="#">Web Design</a></li>
                                <li><a href="#">Web Development</a></li>
                                <li><a href="#">Product Management</a></li>
                                <li><a href="#">Marketing</a></li>
                                <li><a href="#">Graphic Design</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Hic solutasetp</h4>
                            <ul>
                                <li><a href="#">Molestiae accusamus iure</a></li>
                                <li><a href="#">Excepturi dignissimos</a></li>
                                <li><a href="#">Suscipit distinctio</a></li>
                                <li><a href="#">Dilecta</a></li>
                                <li><a href="#">Sit quas consectetur</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Nobis illum</h4>
                            <ul>
                                <li><a href="#">Ipsam</a></li>
                                <li><a href="#">Laudantium dolorum</a></li>
                                <li><a href="#">Dinera</a></li>
                                <li><a href="#">Trodelas</a></li>
                                <li><a href="#">Flexo</a></li>
                            </ul>

                        </div>
                    </div>
                </div>

                <div className="footer-legal text-center position-relative">
                    <div className="container">
                        <div className="copyright">
                            &copy; Copyright <strong><span>TechPhoenixEngineering</span></strong>. All Rights Reserved
                        </div>
                        <div className="credits">
                            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;