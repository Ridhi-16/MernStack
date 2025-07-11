export default function Services(){
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
              <li>
                <a href="./about-us.html">About Us</a>
              </li>
              <li>
                <a href="./classes.html">Classes</a>
              </li>
              <li className="active">
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
    style={{background:'url("/assets/img/breadcrumb-bg.jpg")'}}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="breadcrumb-text">
            <h2>Services</h2>
            <div className="bt-option">
              <a href="./index.html">Home</a>
              <span>Services</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrumb Section End */}
  {/* Services Section Begin */}
  <section className="services-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <span>What we do?</span>
            <h2>PUSH YOUR LIMITS FORWARD</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 order-lg-1 col-md-6 p-0">
          <div className="ss-pic">
            <img src="/assets/img/services/services-1.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-3 order-lg-2 col-md-6 p-0">
          <div className="ss-text">
            <h4>Personal training</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor ut dolore facilisis.
            </p>
            <a href="#">Explore</a>
          </div>
        </div>
        <div className="col-lg-3 order-lg-3 col-md-6 p-0">
          <div className="ss-pic">
            <img src="/assets/img/services/services-2.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-3 order-lg-4 col-md-6 p-0">
          <div className="ss-text">
            <h4>Group fitness classes</h4>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus.
            </p>
            <a href="#">Explore</a>
          </div>
        </div>
        <div className="col-lg-3 order-lg-8 col-md-6 p-0">
          <div className="ss-pic">
            <img src="/assets/img/services/services-4.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-3 order-lg-7 col-md-6 p-0">
          <div className="ss-text second-row">
            <h4>Body building</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor ut dolore facilisis.
            </p>
            <a href="#">Explore</a>
          </div>
        </div>
        <div className="col-lg-3 order-lg-6 col-md-6 p-0">
          <div className="ss-pic">
            <img src="/assets/img/services/services-3.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-3 order-lg-5 col-md-6 p-0">
          <div className="ss-text second-row">
            <h4>Strength training</h4>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus.
            </p>
            <a href="#">Explore</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Services Section End */}
  {/* Banner Section Begin */}
  <section className="banner-section set-bg" style={{background:'url("/assets/img/banner-bg.jpg")'}} >
  
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="bs-text service-banner">
            <h2>Exercise until the body obeys.</h2>
            <div className="bt-tips">
              Where health, beauty and fitness meet.
            </div>
            <a
              href="https://www.youtube.com/watch?v=EzKkl64rRbM"
              className="play-btn video-popup"
            >
              <i className="fa fa-caret-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Banner Section End */}
  {/* Pricing Section Begin */}
  <section className="pricing-section service-pricing spad">
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