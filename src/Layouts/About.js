import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "./Breadcrumb";

const About = () => {
    return (
        <>
            <Breadcrumbs main={'ABOUT'}
                img={{ backgroundImage: "url('assets/img/pro/services_bg.jpg')" }}
                pagename={'About Us'}
            />
            <section id="about" className="team">
                <div className="container" data-aos="fade-up">
                    <div className="row position-relative">
                        <div className="col-lg-12">
                            <div className="">
                                <div className="section-header">
                                    <h2>OUR POLICY</h2>
                                    <p>ISO 9001:2015 Certified</p>
                                </div>
                                <p>QUALITY IS OUR PASSION, QUALITY IS OUR BUSINESS.</p>
                                <p>
                                    “ To Provide Our Customers Quality Service On Time, Every Time.”

                                    Our aim is to achieve, sustain, and enhance customers satisfaction by continually improving the effectiveness of quality management system through teamwork and involvement of all members of our organization.
                                </p>
                                {/* <ul>
                                    <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commo</span></li>
                                    <li><i className="bi bi-check-circle"></i> <span>Duis aute irure dolor in reprehenderit in</span></li>
                                    <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea</span></li>
                                </ul> */}
                                <p>Our vision at Tech Phoenix Engineering is to be a customer driven company providing high quality products at the best price ensuring on-time delivery in full to all our clients.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="stats-counter" className="stats-counter section-bg">
                <div className="container">

                    <div className="row gy-4">

                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item d-flex align-items-center w-100 h-100">
                                <i className="bi bi-emoji-smile color-blue flex-shrink-0"></i>
                                <div>
                                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Happy Clients</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item d-flex align-items-center w-100 h-100">
                                <i className="bi bi-journal-richtext color-orange flex-shrink-0"></i>
                                <div>
                                    <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Projects</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item d-flex align-items-center w-100 h-100">
                                <i className="bi bi-headset color-green flex-shrink-0"></i>
                                <div>
                                    <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Hours Of Support</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item d-flex align-items-center w-100 h-100">
                                <i className="bi bi-people color-pink flex-shrink-0"></i>
                                <div>
                                    <span data-purecounter-start="0" data-purecounter-end="4" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Hard Workers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="team">
                <div className="container" data-aos="fade-up">
                    <div className="row position-relative">
                        <div className="col-lg-12">
                            <div className="">
                                <div className="section-header">
                                    <h2>OUR OBJECTIVE</h2>
                                </div>
                                <ul>
                                    <li>
                                        We use our experience and expertise to help our clients for their betterment and making them assured that every venture is a success.
                                    </li>
                                    <li>
                                        The main objective of Tech Phoenix Engineering is to <strong> undertake and carry on the business of providing all kinds of operational technology based service in India.</strong>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="services section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="row position-relative">
                        <div className="col-lg-12">
                            <div className="">
                                <div className="section-header">
                                    <h2>OUR VISION</h2>
                                </div>
                                <ul>
                                    <li>
                                        We inspire individuals and organizations to <strong> work more effectively and efficiently,</strong> and create greater choice in the domain of work, for the benefit of all concerned..
                                    </li><br />
                                    <li>
                                        Our business has a positive impact on clients every day. Helping clients to <strong>“Quality product, On time delivery”</strong> is our common purpose and the way in which we contribute to industries.
                                    </li>
                                    <li>
                                        This is what we do, this is what we know about, this is what we care about, and this is what we are all about.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="team" className="team">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <h2>Our Team</h2>
                        <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
                    </div>
                    <div className="row gy-5">
                        <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="100">
                            <div className="member-img">
                                <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" />
                                <div className="social">
                                    <a href="#"><i className="bi bi-twitter"></i></a>
                                    <a href="#"><i className="bi bi-facebook"></i></a>
                                    <a href="#"><i className="bi bi-instagram"></i></a>
                                    <a href="#"><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            <div className="member-info text-center">
                                <h4>Walter White</h4>
                                <span>Chief Executive Officer</span>
                                <p>Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="200">
                            <div className="member-img">
                                <img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" />
                                <div className="social">
                                    <a href="#"><i className="bi bi-twitter"></i></a>
                                    <a href="#"><i className="bi bi-facebook"></i></a>
                                    <a href="#"><i className="bi bi-instagram"></i></a>
                                    <a href="#"><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            <div className="member-info text-center">
                                <h4>Sarah Jhonson</h4>
                                <span>Product Manager</span>
                                <p>Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="300">
                            <div className="member-img">
                                <img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" />
                                <div className="social">
                                    <a href="#"><i className="bi bi-twitter"></i></a>
                                    <a href="#"><i className="bi bi-facebook"></i></a>
                                    <a href="#"><i className="bi bi-instagram"></i></a>
                                    <a href="#"><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            <div className="member-info text-center">
                                <h4>William Anderson</h4>
                                <span>CTO</span>
                                <p>Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="testimonials" className="testimonials section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <h2>OUR CORE VALUES</h2>
                    </div>
                    <ul>
                        <li> <strong>Customer satisfaction</strong> our main priority, As it guarantees our future.</li>
                        <li>Achieve the maximum degree of <strong>professional competence</strong>  at all times.</li>
                        <li>Promote and manage change, <strong>taking initiatives and risks.</strong></li>
                        <li>Trust others and be <strong> worthy of their trust</strong>.</li>
                        <li><strong> Communicate  </strong>and inform openly. Obtain and share knowledge.</li>
                        <li><strong> Respect </strong> customers, suppliers, colleagues, the local community and the environment.
                        </li>
                        <li><strong> Accept responsibility</strong> and be answerable for our own actions.</li>
                        <li>Seek excellence. Do-it-right first time.<strong> Zero defects.</strong></li>
                        <li>Make Quality,<strong> Service, Cost, Innovation, Safety and Health at work</strong> and Shared Experience the keys to our activity.</li>
                    </ul>

                </div>
            </section>
        </>
    )
}
export default About;