import React from "react";
import Breadcrumbs from "./Breadcrumb";

const Contact = () => {
    return (
        <>
            <Breadcrumbs main={'Contact Us'}
                img={{ backgroundImage: "url('assets/img/contact_us.jpg')" }}
                pagename={'Contact'}
            />
            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row gy-4">
                        <div className="col-lg-6">
                            <div className="info-item  d-flex flex-column justify-content-center align-items-center">
                                <i className="bi bi-map"></i>
                                <h3>Our Address</h3>
                                <p>922, 17, Makarpura GIDC, Makarpura, Vadodara, Gujarat 390010</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="info-item d-flex flex-column justify-content-center align-items-center">
                                <i className="bi bi-envelope"></i>
                                <h3>Email Us</h3>
                                <p>sales@techphoenixengineering.com</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="info-item  d-flex flex-column justify-content-center align-items-center">
                                <i className="bi bi-telephone"></i>
                                <h3>Call Us</h3>
                                <p>+91 92651 04833</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-4 mt-1">
                        <div className="col-lg-12 ">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471258.88557358383!2d72.62000397453589!3d22.664597005071432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5d55191c9cb%3A0x96a2acfd1b96f31f!2sTECH%20PHOENIX%20ENGINEERING!5e0!3m2!1sen!2sin!4v1677059713141!5m2!1sen!2sin" frameBorder="0" style={{ border: '0', width: '100%', height: '384px' }} allowFullScreen></iframe>
                        </div>
                        {/* <div className="col-lg-6">
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                <div className="row gy-4">
                                    <div className="col-lg-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact;