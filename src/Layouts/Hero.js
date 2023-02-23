import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "./Breadcrumb";


const Home = () => {
  return (
    <>
      <section id="hero" className="hero">
        <div className="info d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <h2 data-aos="fade-down">Welcome to <span><br /><h3>Tech Phoenix Engineering</h3></span></h2>
                <p data-aos="fade-up">Tech Phoenix Engineering, A Pioneer In Manufacturing (CNC Turning and Milling) And Outsourcing Service. Tech Phoenix Engineering Stands For Manufacturing Operations Management (MOM).</p>
                <a data-aos="fade-up" data-aos-delay="200" href="#get-started" className="btn-get-started">Get Started</a>
              </div>
            </div>
          </div>
        </div>
        <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-item active" style={{ backgroundImage: "url(assets/img/pro/about_us.jpg)" }}></div>
          <div className="carousel-item" style={{ backgroundImage: "url(assets/img/pro/p2.jpg)" }}></div>
          <div className="carousel-item" style={{ backgroundImage: "url(assets/img/pro/p5.jpg)" }}></div>
          <div className="carousel-item" style={{ backgroundImage: "url(assets/img/pro/p21.jpg)" }}></div>
          <div className="carousel-item" style={{ backgroundImage: "url(assets/img/pro/service_3.jpg)" }}></div>
          <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
          </a>
          <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
          </a>
        </div>
      </section>
      {/* Main */}
      {/* <section id="get-started" className="get-started section-bg">
        <div className="container">

          <div className="row justify-content-between gy-4">

            <div className="col-lg-6 d-flex align-items-center" data-aos="fade-up">
              <div className="content">
                <h3>Minus hic non reiciendis ea possimus at quia.</h3>
                <p>Rem id rerum. Debitis deserunt quidem delectus expedita ducimus dolor. Aut iusto ipsa. Eos ipsum nobis ipsa soluta itaque perspiciatis fuga ipsum perspiciatis. Eum amet fugiat totam nisi possimus ut delectus dicta.</p>
                <p>Aliquam velit deserunt autem. Inventore et saepe. Tenetur suscipit eligendi labore culpa eos. Deserunt porro magni qui necessitatibus dolorem at animi cupiditate.</p>
              </div>
            </div>
            <div className="col-lg-5" data-aos="fade">
              <form action="forms/quote.php" method="post" className="php-email-form">
                <h3>Get a quote</h3>
                <p>Vel nobis odio laboriosam et hic voluptatem. Inventore vitae totam. Rerum repellendus enim linead sero park flows.</p>
                <div className="row gy-3">

                  <div className="col-md-12">
                    <input type="text" name="name" className="form-control" placeholder="Name" required />
                  </div>

                  <div className="col-md-12 ">
                    <input type="email" className="form-control" name="email" placeholder="Email" required />
                  </div>

                  <div className="col-md-12">
                    <input type="text" className="form-control" name="phone" placeholder="Phone" required />
                  </div>

                  <div className="col-md-12">
                    <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your quote request has been sent successfully. Thank you!</div>

                    <button type="submit">Get a quote</button>
                  </div>

                </div>
              </form>
            </div>
          </div>

        </div>
      </section> */}
      <section id="get-started" className="constructions">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>About Us</h2>
            <p>ISO 9001:2015 Certified</p>
          </div>
          <section id="alt-services-2" className="alt-services">
            <div className="container" data-aos="fade-up">
              <div className="row justify-content-around gy-4">
                <div className="col-lg-5 d-flex flex-column justify-content-center">
                  <h3>About Us</h3>
                  <p>Tech Phoenix Engineering, A Pioneer In Manufacturing (CNC Turning and Milling) And Outsourcing Service. Tech Phoenix Engineering Stands For Manufacturing Operations Management (MOM).</p>
                  <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
                    <div>
                      <p>Since 2019 Tech Phoenix Engineering has gained valuable experience and are regarded as a leading provider of technology driven innovative machining solutions to the industries like <b>Hydro Turbines, Steam-Turbines, Power Transmission and Distribution, Oil & Gas, Exploration, General Engineering, Heavy Industrial, Manufacturing and Research and Development.,</b> Our constant endeavour is to exceed customer’s expectations, productivity, and turnaround time and cost efficiency.</p>
                    </div>
                  </div>
                  <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
                    <div>
                      <p>Tech Phoenix Engineering is committed to Quality and Deliverable, which is its Hallmark. We venture to build long-term partnership with our customers by creating valuable and tangible benefits for our customers.</p>
                    </div>
                  </div>
                  <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
                    <div>
                      <p>
                        Tech Phoenix Engineering based upon following outsourcing principles:<br />
                        - Understanding the needs of customers.<br />
                        - Performing task by professionals.<br />
                        - Ensuring Timely & Quality deliverables.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 img-bg" style={{ backgroundImage: "url(assets/img/pro/relogo1.png)" }} data-aos="zoom-in" data-aos-delay="100"></div>
              </div>
            </div>
          </section>

          {/* <div className="row gy-4">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="card-item">
                <div className="row">
                  <div className="col-xl-5">
                    <div className="card-bg" style={{ backgroundImage: "url(assets/img/constructions-1.jpg)" }}></div>
                  </div>
                  <div className="col-xl-7 d-flex align-items-center">
                    <div className="card-body">
                      <h4 className="card-title">Eligendi omnis sunt veritatis.</h4>
                      <p>Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat deleniti adipisci. Cum delectus doloribus non veritatis. Officia temporibus illo magnam. Dolor eos et.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="card-item">
                <div className="row">
                  <div className="col-xl-5">
                    <div className="card-bg" style={{ backgroundImage: "url(assets/img/constructions-2.jpg)" }}></div>
                  </div>
                  <div className="col-xl-7 d-flex align-items-center">
                    <div className="card-body">
                      <h4 className="card-title">Possimus ut sed velit assumenda</h4>
                      <p>Sunt deserunt maiores voluptatem autem est rerum perferendis rerum blanditiis. Est laboriosam qui iste numquam laboriosam voluptatem architecto. Est laudantium sunt at quas aut hic. Eum dignissimos.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
              <div className="card-item">
                <div className="row">
                  <div className="col-xl-5">
                    <div className="card-bg" style={{ backgroundImage: "url(assets/img/constructions-3.jpg)" }}></div>
                  </div>
                  <div className="col-xl-7 d-flex align-items-center">
                    <div className="card-body">
                      <h4 className="card-title">Error beatae dolor inventore aut</h4>
                      <p>Dicta porro nobis. Velit cum in. Nesciunt dignissimos enim molestiae facilis numquam quae quaerat ipsam omnis. Neque debitis ipsum at architecto officia laboriosam odit. Ut sunt temporibus nulla culpa.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div className="card-item">
                <div className="row">
                  <div className="col-xl-5">
                    <div className="card-bg" style={{ backgroundImage: "url(assets/img/constructions-4.jpg)" }}></div>
                  </div>
                  <div className="col-xl-7 d-flex align-items-center">
                    <div className="card-body">
                      <h4 className="card-title">Expedita voluptas ut ut nesciunt</h4>
                      <p>Aut est quidem doloremque voluptatem magnam quis excepturi vero quia. Eum eos doloremque architecto illo at beatae dolore. Fugiat suscipit et sint ratione dolores. Aut aliquid ea dolores libero nobis.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div> */}

        </div>
      </section>
      {/* Services */}
      <section id="services" className="services section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Services</h2>
            <p>Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur est eveniet deleniti fignissimos eos quam</p>
          </div>

          <div className="row gy-4">

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item  position-relative">
                <div className="icon">
                  <i className="fa-solid fa-mountain-city"></i>
                </div>
                <h3>CNC TURNING</h3>
                <p>Tech Phoenix Engineering provide complex component manufacture and specialized CNC Machining services using the latest manufacturing techniques and equipment.</p>
                <Link to='/Services' className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-arrow-up-from-ground-water"></i>
                </div>
                <h3>CNC MILLING</h3>
                <p>Vertical machining centres (VMCs), also known as milling, relies on  rotary cutters to remove metal from a workpiece, which employs a spindle  with a vertical orientation.</p>
                <Link to='/Services' className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-compass-drafting"></i>
                </div>
                <h3>OUT SOURCING SERVICES</h3>
                <p>At Tech Phoenix Engineering We Provide Outsourcing Facility For:</p><br /><br />
                <Link to='/Services' className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section id="projects" className="projects">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Projects</h2>
            <p>Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur est eveniet deleniti fignissimos eos quam</p>
          </div>
          <div className="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order">
            <ul className="portfolio-flters" data-aos="fade-up" data-aos-delay="100">
              <li data-filter="*" className="filter-active">All</li>
            </ul>
            <div className="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">
              <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
                <div className="portfolio-content h-100">
                  <img src="assets/img/pro/p1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Design 1</h4>
                    {/* <h4>Remodeling 1</h4> */}
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a href="assets/img/pro/p1.jpg" title="Remodeling 1" data-gallery="portfolio-gallery-remodeling" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
                <div className="portfolio-content h-100">
                  <img src="assets/img/pro/p3.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Design 2</h4>
                    {/* <h4>Construction 1</h4> */}
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a href="assets/img/pro/p3.jpg" title="Construction 1" data-gallery="portfolio-gallery-construction" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
                <div className="portfolio-content h-100">
                  <img src="assets/img/pro/p6.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Design 3</h4>
                    {/* <h4>Repairs 1</h4> */}
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a href="assets/img/pro/p6.jpg" title="Repairs 1" data-gallery="portfolio-gallery-repairs" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-design">
                <div className="portfolio-content h-100">
                  <img src="assets/img/pro/p2.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Design 4</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a href="assets/img/pro/p2.jpg" title="Repairs 1" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
                <div className="portfolio-content h-100">
                  <img src="assets/img/pro/p5.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    {/* <h4>Remodeling 2</h4> */}
                    <h4>Design 5</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a href="assets/img/pro/p5.jpg" title="Remodeling 2" data-gallery="portfolio-gallery-remodeling" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
                <div className="portfolio-content h-100">
                  <img src="assets/img/pro/p10.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    {/* <h4>Construction 2</h4> */}
                    <h4>Design 6</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a href="assets/img/pro/p10.jpg" title="Construction 2" data-gallery="portfolio-gallery-construction" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default Home;