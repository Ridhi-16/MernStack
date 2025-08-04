import { Link, useLocation, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

let {pathname}=useLocation
export default function AdminHeader(){

  let isLogin=sessionStorage.getItem("isLogin")
  let name=sessionStorage.getItem("name")
    const nav=useNavigate()
    const logout=()=>{
            
        Swal.fire({
          title: "Are you sure?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Logout!"
          }).then((result) => {
        if (result.isConfirmed) {
            sessionStorage.clear()
            nav("/login")
            Swal.fire({
            title: "Logout!",
            text: "Logout successfully.",
            icon: "success"
            });
        }
            });
    }
    return(
        <>
          <div className="offcanvas-menu-overlay" />
  
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
                <Link to="#">Trainer</Link>
                <ul className="dropdown">
                  <li className={`nav item ${pathname=="/" && "active"}`}>
                    <Link to="/admin/trainer/manage">Manage trainer</Link>
                  </li>
                  <li className={`nav item ${pathname=="/" && "active"}`}>
                    <Link to="/admin/trainer/register">Add trainer</Link>
                  </li>
                </ul>
              </li>

              <li className={`nav item ${pathname=="/" && "active"}`}>
                <Link to="#">Batch</Link>
                <ul className="dropdown">
                  <li className={`nav item ${pathname=="/" && "active"}`}>
                    <Link to="/admin/batch/add">Add Batch</Link>
                  </li>
                  <li className={`nav item ${pathname=="/" && "active"}`}>
                    <Link to="/admin/batch/manage">Manage Batch</Link>
                  </li>
                </ul>
              </li>


              <li className={`nav item ${pathname=="/" && "active"}`}>
                <Link to="/services">Services</Link>
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
                  <li className={`nav item ${pathname=="/" && "active"}`}>
                  <Link to="/contact">Contact</Link>
                </li>
                </ul>
              </li>
              
              { isLogin?
              
                
                <li className={`nav item ${pathname=="/" && "active"}`}>
                      <Link to="#" onClick={logout}>Logout {name}</Link>
                </li>
                :
                <li className={`nav item ${pathname=="/" && "active"}`}>
                      <Link to="/login">Login</Link>
                </li>
              }
              
             
              
               
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