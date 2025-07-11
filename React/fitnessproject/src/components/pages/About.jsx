export default function About(){
    return(
        <>
        <>
  <div className="offcanvas-menu-overlay" />
  <div className="offcanvas-menu-wrapper">
    <div className="canvas-close">
      <i className="fa fa-close" />
    </div>
    <div className="canvas-search search-switch">
      <i className="fa fa-search" />
    </div>
    <nav className="canvas-menu mobile-menu">
      <ul>
        <li>
          <a href="./index.html">Home</a>
        </li>
        <li>
          <a href="./about-us.html">About Us</a>
        </li>
        <li>
          <a href="./classes.html">Classes</a>
        </li>
        <li>
          <a href="./services.html">Services</a>
        </li>
        <li>
          <a href="./team.html">Our Team</a>
        </li>
        <li>
          <a href="#">Pages</a>
          <ul className="dropdown">
            <li>
              <a href="./about-us.html">About us</a>
            </li>
            <li>
              <a href="./class-timetable.html">Classes timetable</a>
            </li>
            <li>
              <a href="./bmi-calculator.html">Bmi calculate</a>
            </li>
            <li>
              <a href="./team.html">Our team</a>
            </li>
            <li>
              <a href="./gallery.html">Gallery</a>
            </li>
            <li>
              <a href="./blog.html">Our blog</a>
            </li>
            <li>
              <a href="./404.html">404</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="./contact.html">Contact</a>
        </li>
      </ul>
    </nav>
    <div id="mobile-menu-wrap" />
    <div className="canvas-social">
      <a href="#">
        <i className="fa fa-facebook" />
      </a>
      <a href="#">
        <i className="fa fa-twitter" />
      </a>
      <a href="#">
        <i className="fa fa-youtube-play" />
      </a>
      <a href="#">
        <i className="fa fa-instagram" />
      </a>
    </div>
  </div>
  {/* Offcanvas Menu Section End */}
  {/* Header Section Begin */}
  <header className="header-section">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3">
          <div className="logo">
            <a href="./index.html">
              <img src="/assets/img/logo.png" alt="" />
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <nav className="nav-menu">
            <ul>
              <li>
                <a href="./index.html">Home</a>
              </li>
              <li className="active">
                <a href="./about-us.html">About Us</a>
              </li>
              <li>
                <a href="./class-details.html">Classes</a>
              </li>
              <li>
                <a href="./services.html">Services</a>
              </li>
              <li>
                <a href="./team.html">Our Team</a>
              </li>
              <li>
                <a href="#">Pages</a>
                <ul className="dropdown">
                  <li>
                    <a href="./about-us.html">About us</a>
                  </li>
                  <li>
                    <a href="./class-timetable.html">Classes timetable</a>
                  </li>
                  <li>
                    <a href="./bmi-calculator.html">Bmi calculate</a>
                  </li>
                  <li>
                    <a href="./team.html">Our team</a>
                  </li>
                  <li>
                    <a href="./gallery.html">Gallery</a>
                  </li>
                  <li>
                    <a href="./blog.html">Our blog</a>
                  </li>
                  <li>
                    <a href="./404.html">404</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="./contact.html">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-lg-3">
          <div className="top-option">
            <div className="to-search search-switch">
              <i className="fa fa-search" />
            </div>
            <div className="to-social">
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                <i className="fa fa-youtube-play" />
              </a>
              <a href="#">
                <i className="fa fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="canvas-open">
        <i className="fa fa-bars" />
      </div>
    </div>
  </header>
  {/* Header End */}
  {/* Breadcrumb Section Begin */}
  <section
    className="breadcrumb-section set-bg"
    style={{backgroundImage:'url("/assets/img/breadcrumb-bg.jpg")'}}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="breadcrumb-text">
            <h2>About us</h2>
            <div className="bt-option">
              <a href="./index.html">Home</a>
              <span>About</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrumb Section End */}
  {/* ChoseUs Section Begin */}
  <section className="choseus-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <span>Why chose us?</span>
            <h2>PUSH YOUR LIMITS FORWARD</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div className="cs-item">
            <span className="flaticon-034-stationary-bike" />
            <h4>Modern equipment</h4>
            <p>
              Train with state-of-the-art fitness machines and tools designed for all fitness levels, ensuring maximum results with every session.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="cs-item">
            <span className="flaticon-033-juice" />
            <h4>Healthy nutrition plan</h4>
            <p>
              Personalized meal plans curated by certified nutritionists to complement your fitness goals and promote long-term well-being.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="cs-item">
            <span className="flaticon-002-dumbell" />
            <h4>Proffesponal training plan</h4>
            <p>
              Guided by experienced trainers, our structured programs are tailored to your fitness level, helping you progress safely and effectively.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="cs-item">
            <span className="flaticon-014-heart-beat" />
            <h4>Unique to your needs</h4>
            <p>
              From weight loss to strength training, our customized plans adapt to your body, lifestyle, and preferences for truly personal results
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ChoseUs Section End */}
  {/* About US Section Begin */}
  <section className="aboutus-section">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 p-0">
          <div className="about-video set-bg" style={{background:`url(${"/assets/img/about-us.jpg"})`}}>
            <a href="https://www.youtube.com/watch?v=EzKkl64rRbM"
              className="play-btn video-popup"
            >
              <i className="fa fa-caret-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-6 p-0">
          <div className="about-text">
            <div className="section-title">
              <span>About Us</span>
              <h2>What we have done</h2>
            </div>
            <div className="at-desc">
              <p>
                At our fitness center, 
                we believe in more than just working out — we believe in transforming lives. 
                With cutting-edge equipment, certified trainers, and personalized training programs, 
                we are committed to helping you push beyond your limits. Whether you're aiming to build strength, 
                lose weight, or improve overall wellness, our expert-designed nutrition plans and tailored workouts
                 are crafted to meet your individual goals. Join a community that supports, motivates, and empowers — 
                 because your fitness journey deserves the best.
              </p>
            </div>
            <div className="about-bar">
              <div className="ab-item">
                <p>Body building</p>
                <div id="bar1" className="barfiller">
                  <span className="fill" data-percentage={80} />
                  <div className="tipWrap">
                    <span className="tip" />
                  </div>
                </div>
              </div>
              <div className="ab-item">
                <p>Training</p>
                <div id="bar2" className="barfiller">
                  <span className="fill" data-percentage={85} />
                  <div className="tipWrap">
                    <span className="tip" />
                  </div>
                </div>
              </div>
              <div className="ab-item">
                <p>Fitness</p>
                <div id="bar3" className="barfiller">
                  <span className="fill" data-percentage={75} />
                  <div className="tipWrap">
                    <span className="tip" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* About US Section End */}
  {/* Team Section Begin */}
  <section className="team-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="team-title">
            <div className="section-title">
              <span>Our Team</span>
              <h2>TRAIN WITH EXPERTS</h2>
            </div>
            <a href="#" className="primary-btn btn-normal appoinment-btn">
              appointment
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="ts-slider owl-carousel">
          <div className="col-lg-4">
            <div className="ts-item set-bg" style={{background:`url${"/assets/img/team/team-1.jpg"}`}}>
              <div className="ts_text">
                <h4>Athart Rachel</h4>
                <span>Gym Trainer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ts-item set-bg" style={{background:`url${"/assets/img/team/team-2.jpg"}`}}>
              <div className="ts_text">
                <h4>Athart Rachel</h4>
                <span>Gym Trainer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ts-item set-bg" style={{background:`url${"/assets/img/team/team-3.jpg"}`}} >
              <div className="ts_text">
                <h4>Athart Rachel</h4>
                <span>Gym Trainer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ts-item set-bg" data-setbg="/assets/img/team/team-4.jpg">
              <div className="ts_text">
                <h4>Athart Rachel</h4>
                <span>Gym Trainer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ts-item set-bg" data-setbg="/assets/img/team/team-5.jpg">
              <div className="ts_text">
                <h4>Athart Rachel</h4>
                <span>Gym Trainer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ts-item set-bg" style={{backgroundImage:'url("/assets/img/team/team-6.jpg")'}}>
              <div className="ts_text">
                <h4>Athart Rachel</h4>
                <span>Gym Trainer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Team Section End */}
  {/* Banner Section Begin */}
  <section className="banner-section set-bg"  style={{backgroundImage:'url("/assets/img/banner-bg.jpg")'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="bs-text">
            <h2>registration now to get more deals</h2>
            <div className="bt-tips">
              Where health, beauty and fitness meet.
            </div>
            <a href="#" className="primary-btn  btn-normal">
              Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Banner Section End */}
  {/* Testimonial Section Begin */}
  <section className="testimonial-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <span>Testimonial</span>
            <h2>Our cilent say</h2>
          </div>
        </div>
      </div>
      <div className="ts_slider owl-carousel">
        <div className="ts_item">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="ti_pic">
                <img src="/assets/img/testimonial/testimonial-1.jpg" alt="" />
              </div>
              <div className="ti_text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                  <br /> ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Risus commodo
                  <br /> viverra maecenas accumsan lacus vel facilisis.
                </p>
                <h5>Marshmello Gomez</h5>
                <div className="tt-rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ts_item">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="ti_pic">
                <img src="/assets/img/testimonial/testimonial-2.jpg" alt="" />
              </div>
              <div className="ti_text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                  <br /> ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Risus commodo
                  <br /> viverra maecenas accumsan lacus vel facilisis.
                </p>
                <h5>Marshmello Gomez</h5>
                <div className="tt-rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Testimonial Section End */}
  {/* Get In Touch Section Begin */}
  <div className="gettouch-section">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="gt-text">
            <i className="fa fa-map-marker" />
            <p>
              333 Middle Winchendon Rd, Rindge,
              <br /> NH 03461
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="gt-text">
            <i className="fa fa-mobile" />
            <ul>
              <li>125-711-811</li>
              <li>125-668-886</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="gt-text email">
            <i className="fa fa-envelope" />
            <p>Support.gymcenter@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Get In Touch Section End */}
  {/* Footer Section Begin */}
  <section className="footer-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="fs-about">
            <div className="fa-logo">
              <a href="#">
                <img src="/assets/img/logo.png" alt="" />
              </a>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore dolore magna aliqua endisse
              ultrices gravida lorem.
            </p>
            <div className="fa-social">
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                <i className="fa fa-youtube-play" />
              </a>
              <a href="#">
                <i className="fa fa-instagram" />
              </a>
              <a href="#">
                <i className="fa  fa-envelope-o" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6">
          <div className="fs-widget">
            <h4>Useful links</h4>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Classes</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6">
          <div className="fs-widget">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">My account</a>
              </li>
              <li>
                <a href="#">Subscribe</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="fs-widget">
            <h4>Tips &amp; Guides</h4>
            <div className="fw-recent">
              <h6>
                <a href="#">
                  Physical fitness may help prevent depression, anxiety
                </a>
              </h6>
              <ul>
                <li>3 min read</li>
                <li>20 Comment</li>
              </ul>
            </div>
            <div className="fw-recent">
              <h6>
                <a href="#">
                  Fitness: The best exercise to lose belly fat and tone up...
                </a>
              </h6>
              <ul>
                <li>3 min read</li>
                <li>20 Comment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="copyright-text">
            <p>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright © All rights reserved | This template is made with{" "}
              <i className="fa fa-heart" aria-hidden="true" /> by{" "}
              <a href="https://colorlib.com" target="_blank">
                Colorlib
              </a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Footer Section End */}
  {/* Search model Begin */}
  <div className="search-model">
    <div className="h-100 d-flex align-items-center justify-content-center">
      <div className="search-close-switch">+</div>
      <form className="search-model-form">
        <input type="text" id="search-input" placeholder="Search here....." />
      </form>
    </div>
  </div>
</>

        </>
    )
}