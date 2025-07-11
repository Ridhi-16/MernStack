export default function Error(){
    return(
        <>
        <>
  <section className="section-404">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="text-404">
            <h1>404</h1>
            <h3>Opps! This page Could Not Be Found!</h3>
            <p>
              Sorry bit the page you are looking for does not exist, have been
              removed or name changed
            </p>
            <form action="#" className="search-404">
              <input type="text" placeholder="Enter your keyword" />
              <button type="submit">
                <i className="fa fa-search" />
              </button>
            </form>
            <a href="./index.html">
              <i className="fa fa-home" /> Go back home
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* 404 Section End */}
  {/* Offcanvas Menu Section Begin */}
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
              <img src="img/logo.png" alt="" />
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <nav className="nav-menu">
            <ul>
              <li className="active">
                <a href="./index.html">Home</a>
              </li>
              <li>
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
  {/* Hero Section Begin */}
  <section className="hero-section">
    <div className="hs-slider owl-carousel">
      <div className="hs-item set-bg" data-setbg="img/hero/hero-1.jpg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="hi-text">
                <span>Shape your body</span>
                <h1>
                  Be <strong>strong</strong> traning hard
                </h1>
                <a href="#" className="primary-btn">
                  Get info
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hs-item set-bg" data-setbg="img/hero/hero-2.jpg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="hi-text">
                <span>Shape your body</span>
                <h1>
                  Be <strong>strong</strong> traning hard
                </h1>
                <a href="#" className="primary-btn">
                  Get info
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Hero Section End */}
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut dolore facilisis.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="cs-item">
            <span className="flaticon-033-juice" />
            <h4>Healthy nutrition plan</h4>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="cs-item">
            <span className="flaticon-002-dumbell" />
            <h4>Proffesponal training plan</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut dolore facilisis.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="cs-item">
            <span className="flaticon-014-heart-beat" />
            <h4>Unique to your needs</h4>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ChoseUs Section End */}
  {/* Classes Section Begin */}
  <section className="classes-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <span>Our Classes</span>
            <h2>WHAT WE CAN OFFER</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="class-item">
            <div className="ci-pic">
              <img src="img/classes/class-1.jpg" alt="" />
            </div>
            <div className="ci-text">
              <span>STRENGTH</span>
              <h5>Weightlifting</h5>
              <a href="#">
                <i className="fa fa-angle-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="class-item">
            <div className="ci-pic">
              <img src="img/classes/class-2.jpg" alt="" />
            </div>
            <div className="ci-text">
              <span>Cardio</span>
              <h5>Indoor cycling</h5>
              <a href="#">
                <i className="fa fa-angle-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="class-item">
            <div className="ci-pic">
              <img src="img/classes/class-3.jpg" alt="" />
            </div>
            <div className="ci-text">
              <span>STRENGTH</span>
              <h5>Kettlebell power</h5>
              <a href="#">
                <i className="fa fa-angle-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="class-item">
            <div className="ci-pic">
              <img src="img/classes/class-4.jpg" alt="" />
            </div>
            <div className="ci-text">
              <span>Cardio</span>
              <h4>Indoor cycling</h4>
              <a href="#">
                <i className="fa fa-angle-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="class-item">
            <div className="ci-pic">
              <img src="img/classes/class-5.jpg" alt="" />
            </div>
            <div className="ci-text">
              <span>Training</span>
              <h4>Boxing</h4>
              <a href="#">
                <i className="fa fa-angle-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ChoseUs Section End */}
  {/* Banner Section Begin */}
  <section className="banner-section set-bg" data-setbg="img/banner-bg.jpg">
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
  {/* Pricing Section Begin */}
  <section className="pricing-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <span>Our Plan</span>
            <h2>Choose your pricing plan</h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-8">
          <div className="ps-item">
            <h3>Class drop-in</h3>
            <div className="pi-price">
              <h2>$ 39.0</h2>
              <span>SINGLE CLASS</span>
            </div>
            <ul>
              <li>Free riding</li>
              <li>Unlimited equipments</li>
              <li>Personal trainer</li>
              <li>Weight losing classes</li>
              <li>Month to mouth</li>
              <li>No time restriction</li>
            </ul>
            <a href="#" className="primary-btn pricing-btn">
              Enroll now
            </a>
            <a href="#" className="thumb-icon">
              <i className="fa fa-picture-o" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-8">
          <div className="ps-item">
            <h3>12 Month unlimited</h3>
            <div className="pi-price">
              <h2>$ 99.0</h2>
              <span>SINGLE CLASS</span>
            </div>
            <ul>
              <li>Free riding</li>
              <li>Unlimited equipments</li>
              <li>Personal trainer</li>
              <li>Weight losing classes</li>
              <li>Month to mouth</li>
              <li>No time restriction</li>
            </ul>
            <a href="#" className="primary-btn pricing-btn">
              Enroll now
            </a>
            <a href="#" className="thumb-icon">
              <i className="fa fa-picture-o" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-8">
          <div className="ps-item">
            <h3>6 Month unlimited</h3>
            <div className="pi-price">
              <h2>$ 59.0</h2>
              <span>SINGLE CLASS</span>
            </div>
            <ul>
              <li>Free riding</li>
              <li>Unlimited equipments</li>
              <li>Personal trainer</li>
              <li>Weight losing classes</li>
              <li>Month to mouth</li>
              <li>No time restriction</li>
            </ul>
            <a href="#" className="primary-btn pricing-btn">
              Enroll now
            </a>
            <a href="#" className="thumb-icon">
              <i className="fa fa-picture-o" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Pricing Section End */}
  {/* Gallery Section Begin */}
  <div className="gallery-section">
    <div className="gallery">
      <div className="grid-sizer" />
      <div
        className="gs-item grid-wide set-bg"
        data-setbg="img/gallery/gallery-1.jpg"
      >
        <a href="img/gallery/gallery-1.jpg" className="thumb-icon image-popup">
          <i className="fa fa-picture-o" />
        </a>
      </div>
      <div className="gs-item set-bg" data-setbg="img/gallery/gallery-2.jpg">
        <a href="img/gallery/gallery-2.jpg" className="thumb-icon image-popup">
          <i className="fa fa-picture-o" />
        </a>
      </div>
      <div className="gs-item set-bg" data-setbg="img/gallery/gallery-3.jpg">
        <a href="img/gallery/gallery-3.jpg" className="thumb-icon image-popup">
          <i className="fa fa-picture-o" />
        </a>
      </div>
      <div className="gs-item set-bg" data-setbg="img/gallery/gallery-4.jpg">
        <a href="img/gallery/gallery-4.jpg" className="thumb-icon image-popup">
          <i className="fa fa-picture-o" />
        </a>
      </div>
      <div className="gs-item set-bg" data-setbg="img/gallery/gallery-5.jpg">
        <a href="img/gallery/gallery-5.jpg" className="thumb-icon image-popup">
          <i className="fa fa-picture-o" />
        </a>
      </div>
      <div
        className="gs-item grid-wide set-bg"
        data-setbg="img/gallery/gallery-6.jpg"
      >
        <a href="img/gallery/gallery-6.jpg" className="thumb-icon image-popup">
          <i className="fa fa-picture-o" />
        </a>
      </div>
    </div>
  </div>
  {/* Gallery Section End */}
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
            <div className="ts-item set-bg" data-setbg="img/team/team-1.jpg">
              <div className="ts_text">
                <h4>Athart Rachel</h4>
                <span>Gym Trainer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ts-item set-bg" data-setbg="img/team/team-2.jpg">
              <div className="ts_text">
                <h4>Athart Rachel</h4>
                <span>Gym Trainer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ts-item set-bg" data-setbg="img/team/team-3.jpg">
              <div className="ts_text">
                <h4>Athart Rachel</h4>
                <span>Gym Trainer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ts-item set-bg" data-setbg="img/team/team-4.jpg">
              <div className="ts_text">
                <h4>Athart Rachel</h4>
                <span>Gym Trainer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ts-item set-bg" data-setbg="img/team/team-5.jpg">
              <div className="ts_text">
                <h4>Athart Rachel</h4>
                <span>Gym Trainer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ts-item set-bg" data-setbg="img/team/team-6.jpg">
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
                <img src="img/logo.png" alt="" />
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