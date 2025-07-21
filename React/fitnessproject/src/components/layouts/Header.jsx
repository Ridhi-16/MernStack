import { Link, useLocation } from "react-router-dom";

let {pathname}=useLocation
export default function Header(){
    return(
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
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/classdetails">Classes</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/team">Our Team</Link>
        </li>
        <li>
          <Link to="#">Pages</Link>
          <ul className="dropdown">
            <li>
              <Link to="/about-us">About us</Link>
            </li>
            <li>
              <Link to="/classtimetable">Classes timetable</Link>
            </li>
            <li>
              <Link to="/bmi">Bmi calculate</Link>
            </li>
            <li>
              <Link to="/team">Our team</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/blog">Our blog</Link>
            </li>
            <li>
              <Link to="/404">404</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
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
            <a href="/index">
              <img src="/assets/img/logo.png" alt="" />
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <nav className="nav-menu">
            <ul>
              <li className={`nav item ${pathname=="/" && "active"}`} >
                <Link to="/">Home</Link>
              </li>
              
              <li className={`nav item ${pathname=="/" && "active"}`}>
                <Link to="/classdetails">Classes</Link>
              </li>
              <li className={`nav item ${pathname=="/" && "active"}`}>
                <Link to="/services">Services</Link>
              </li>
              <li className={`nav item ${pathname=="/" && "active"}`}>
                <Link to="/team">Our Team</Link>
              </li>
              <li className={`nav item ${pathname=="/" && "active"}`}>
                <Link to="#">Pages</Link>
                <ul className="dropdown">
                  <li className={`nav item ${pathname=="/" && "active"}`}>
                    <Link to="/about">About us</Link>
                  </li>
                  <li className={`nav item ${pathname=="/" && "active"}`}>
                    <Link to="/classtimetable">Classes timetable</Link>
                  </li>
                  <li className={`nav item ${pathname=="/" && "active"}`}>
                    <Link to="/bmi">Bmi calculate</Link>
                  </li>
                  <li className={`nav item ${pathname=="/" && "active"}`}>
                    <Link to="/team">Our team</Link>
                  </li>
                  <li className={`nav item ${pathname=="/" && "active"}`}>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li className={`nav item ${pathname=="/" && "active"}`}> 
                    <Link to="/blog">Our blog</Link>
                  </li>
                  <li className={`nav item ${pathname=="/" && "active"}`}>
                    <Link to="/404">404</Link>
                  </li>
                </ul>
              </li>
               <li className={`nav item ${pathname=="/" && "active"}`}>
                <Link to="/contact">Contact</Link>
              </li>
              <li className={`nav item ${pathname=="/" && "active"}`}>
                    <Link to="/login">Login</Link>
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
      <div className="hs-item set-bg" style={{backgroundImage:'url("/assets/img/hero/hero-1.jpg")'}}>
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
      <div className="hs-item set-bg" style={{backgroundImage:'url("/assets/img/hero/hero-2.jpg")'}}>
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
  
        </>
    )
}