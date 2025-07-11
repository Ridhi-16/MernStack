export default function Blog(){
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
                <a href="./class-details.html">Classes</a>
              </li>
              <li>
                <a href="./services.html">Services</a>
              </li>
              <li>
                <a href="./team.html">Our Team</a>
              </li>
              <li className="active">
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
            <h2>Our Blog</h2>
            <div className="bt-option">
              <a href="./index.html">Home</a>
              <a href="#">Pages</a>
              <span>Blog</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrumb Section End */}
  {/* Blog Section Begin */}
  <section className="blog-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 p-0">
          <div className="blog-item">
            <div className="bi-pic">
              <img src="/assets/img/blog/blog-1.jpg" alt="" />
            </div>
            <div className="bi-text">
              <h5>
                <a href="./blog-details.html">
                  Vegan White Peach Mug Cobbler With Cardam Vegan White Peach
                  Mug Cobbler...
                </a>
              </h5>
              <ul>
                <li>by Admin</li>
                <li>Aug,15, 2019</li>
                <li>20 Comment</li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                accumsan lacus facilisis.
              </p>
            </div>
          </div>
          <div className="blog-item">
            <div className="bi-pic">
              <img src="/assets/img/blog/blog-2.jpg" alt="" />
            </div>
            <div className="bi-text">
              <h5>
                <a href="./blog-details.html">
                  Vegan White Peach Mug Cobbler With Cardam Vegan White Peach
                  Mug Cobbler...
                </a>
              </h5>
              <ul>
                <li>by Admin</li>
                <li>Aug,15, 2019</li>
                <li>20 Comment</li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                accumsan lacus facilisis.
              </p>
            </div>
          </div>
          <div className="blog-item">
            <div className="bi-pic">
              <img src="/assets/img/blog/blog-3.jpg" alt="" />
            </div>
            <div className="bi-text">
              <h5>
                <a href="./blog-details.html">
                  Vegan White Peach Mug Cobbler With Cardam Vegan White Peach
                  Mug Cobbler...
                </a>
              </h5>
              <ul>
                <li>by Admin</li>
                <li>Aug,15, 2019</li>
                <li>20 Comment</li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                accumsan lacus facilisis.
              </p>
            </div>
          </div>
          <div className="blog-item">
            <div className="bi-pic">
              <img src="/assets/img/blog/blog-4.jpg" alt="" />
            </div>
            <div className="bi-text">
              <h5>
                <a href="./blog-details.html">
                  Vegan White Peach Mug Cobbler With Cardam Vegan White Peach
                  Mug Cobbler...
                </a>
              </h5>
              <ul>
                <li>by Admin</li>
                <li>Aug,15, 2019</li>
                <li>20 Comment</li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                accumsan lacus facilisis.
              </p>
            </div>
          </div>
          <div className="blog-item">
            <div className="bi-pic">
              <img src="/assets/img/blog/blog-5.jpg" alt="" />
            </div>
            <div className="bi-text">
              <h5>
                <a href="./blog-details.html">
                  Vegan White Peach Mug Cobbler With Cardam Vegan White Peach
                  Mug Cobbler...
                </a>
              </h5>
              <ul>
                <li>by Admin</li>
                <li>Aug,15, 2019</li>
                <li>20 Comment</li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                accumsan lacus facilisis.
              </p>
            </div>
          </div>
          <div className="blog-pagination">
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">Next</a>
          </div>
        </div>
        <div className="col-lg-4 col-md-8 p-0">
          <div className="sidebar-option">
            <div className="so-categories">
              <h5 className="title">Categories</h5>
              <ul>
                <li>
                  <a href="#">
                    Yoga <span>12</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Runing <span>32</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Weightloss <span>86</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Cario <span>25</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Body buiding <span>36</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Nutrition <span>15</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="so-latest">
              <h5 className="title">Feature posts</h5>
              <div
                className="latest-large set-bg"
                
                style={{background:'url("/assets/img/letest-blog/latest-1.jpg")'}}
              >
                <div className="ll-text">
                  <h5>
                    <a href="./blog-details.html">
                      This Japanese Way of Making Iced Coffee Is a Game...
                    </a>
                  </h5>
                  <ul>
                    <li>Aug 20, 2019</li>
                    <li>20 Comment</li>
                  </ul>
                </div>
              </div>
              <div className="latest-item">
                <div className="li-pic">
                  <img src="/assets/img/letest-blog/latest-2.jpg" alt="" />
                </div>
                <div className="li-text">
                  <h6>
                    <a href="./blog-details.html">
                      Grilled Potato and Green Bean Salad
                    </a>
                  </h6>
                  <span className="li-time">Aug 15, 2019</span>
                </div>
              </div>
              <div className="latest-item">
                <div className="li-pic">
                  <img src="/assets/img/letest-blog/latest-3.jpg" alt="" />
                </div>
                <div className="li-text">
                  <h6>
                    <a href="./blog-details.html">
                      The $8 French Rosé I Buy in Bulk Every Summer
                    </a>
                  </h6>
                  <span className="li-time">Aug 15, 2019</span>
                </div>
              </div>
              <div className="latest-item">
                <div className="li-pic">
                  <img src="/assets/img/letest-blog/latest-4.jpg" alt="" />
                </div>
                <div className="li-text">
                  <h6>
                    <a href="./blog-details.html">
                      Ina Garten's Skillet-Roasted Lemon Chicken
                    </a>
                  </h6>
                  <span className="li-time">Aug 15, 2019</span>
                </div>
              </div>
              <div className="latest-item">
                <div className="li-pic">
                  <img src="/assets/img/letest-blog/latest-5.jpg" alt="" />
                </div>
                <div className="li-text">
                  <h6>
                    <a href="./blog-details.html">
                      The Best Weeknight Baked Potatoes, 3 Creative Ways
                    </a>
                  </h6>
                  <span className="li-time">Aug 15, 2019</span>
                </div>
              </div>
            </div>
            <div className="so-tags">
              <h5 className="title">Popular tags</h5>
              <a href="#">Gyming</a>
              <a href="#">Body buidling</a>
              <a href="#">Yoga</a>
              <a href="#">Weightloss</a>
              <a href="#">Proffeponal</a>
              <a href="#">Streching</a>
              <a href="#">Cardio</a>
              <a href="#">Karate</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Blog Section End */}
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
                <a href="./blog-details.html">
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
                <a href="./blog-details.html">
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