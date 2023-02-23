import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "./Breadcrumb";

const Services = () => {
    return (
        <>
            {/* Breadcrumbs */}
            <Breadcrumbs main={'SERVICES'}
                img={{ backgroundImage: "url('assets/img/pro/services_bg.jpg')" }}
                pagename={'Services'}
            />
            {/* End  */}
            {/* Services */}
            <section id="alt-services-2" className="alt-services section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="row justify-content-around gy-4">
                        <div className="col-lg-5 d-flex flex-column justify-content-center">
                            <h3>CNC TURNING</h3>
                            <p>Tech Phoenix Engineering provide complex component manufacture and specialized CNC Machining services using the latest manufacturing techniques and equipment.</p>
                            <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
                                <div>
                                    <p>Our turning centre's all feature live tooling. These technologies in conjunction with our <strong> on-site design facilities</strong> afford us the capacity to manufacture virtually any component, to the highest standards of <strong>quality and precision</strong> at the most <b>competitive price.
                                    </b></p>
                                </div>
                            </div>
                            <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
                                <div>
                                    <p>Our dedicated staff are fully qualified to manufacture prototypes and components to the <b>highest possible standard in the fastest possible lead time.</b></p>
                                </div>
                            </div>
                            <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
                                <div>
                                    <p>
                                        From short to long runs, prototypes to full production runs let us look after all your <b>machining needs.</b></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 img-bg" style={{ backgroundImage: "url(assets/img/pro/about_us.jpg)" }} data-aos="zoom-in" data-aos-delay="100"></div>
                    </div>
                </div>
            </section>
            <section id="alt-services" className="alt-services">
                <div className="container" data-aos="fade-up">
                    <div className="row justify-content-around gy-4">
                        <div className="col-lg-6 img-bg" style={{ backgroundImage: "url(assets/img/pro/servicewebp.webp)" }} data-aos="zoom-in" data-aos-delay="100"></div>
                        <div className="col-lg-4 d-flex flex-column justify-content-center">
                            <h3>CNC MILLING</h3>
                            <p>Vertical machining centres (VMCs), also known as milling, relies on  rotary cutters to remove metal from a workpiece, which employs a spindle  with a vertical orientation. <br /> CNC milling is a specific form of computer  numerical controlled (CNC) machining in which the milling movements are  programmed into a computer or CAD system before the milling takes  place. <br /> In addition, Ancillary equipment is also available to increase  the flexibility and capability of these machines, including spindle  speeders, angle heads, tool- and part-probes, quick-change work holding  devices, and rotary indexers to enable 4th axis machining work. </p>
                            <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
                                <div>
                                    <p>At Tech Phoenix Engineering we provide milling operations and services of ferrous and non-ferrous metals and in the manufacturing of small and big precision metal parts. in the field of automatic turning, and mechanics of precision for the <b> Automobile / Oil & Gas / Engineering  / Agricultural industries.</b> The plant is equipped with advanced <b> milling machines with 4th axis enabled.</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="alt-services-2" className="alt-services section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="row justify-content-around gy-4">
                        <div className="col-lg-3 d-flex flex-column justify-content-center">
                            <h3>OUT SOURCING SERVICES</h3>
                            <p>At Tech Phoenix Engineering We Provide Outsourcing Facility For:</p>
                            <div>
                                <ul>
                                <p>Testing</p>
                                <p>Heat treatment</p>
                                <p>Plating</p>
                                <p>Coating</p>
                                <p>Blackening & CED</p>
                                <p>Assembly & Sub-Assembly</p>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 img-bg" style={{ backgroundImage: "url(assets/img/pro/p5.jpg)" }} data-aos="zoom-in" data-aos-delay="100"></div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Services;