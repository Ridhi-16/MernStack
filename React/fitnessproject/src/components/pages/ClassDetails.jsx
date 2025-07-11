export default function ClassDetails(){
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
              <li className="active">
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
    data-setbg="/assets/img/breadcrumb-bg.jpg"
    style={{background:'url("/assets/img/breadcrumb-bg.jpg")'}}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="breadcrumb-text">
            <h2>Classes detail</h2>
            <div className="bt-option">
              <a href="./index.html">Home</a>
              <a href="#">Classes</a>
              <span>Body building</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrumb Section End */}
  {/* Class Details Section Begin */}
  <section className="class-details-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="class-details-text">
            <div className="cd-pic">
              <img src="/assets/img/classes/class-details/class-detailsl.jpg" alt="" />
            </div>
            <div className="cd-text">
              <div className="cd-single-item">
                <h3>Body buiding</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua accusantium doloremque laudantium. Excepteur sint
                  occaecat cupidatat non proident sculpa.
                </p>
              </div>
              <div className="cd-single-item">
                <h3>Trainer</h3>
                <p>
                  Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur officia deserunt mollit.
                </p>
              </div>
            </div>
            <div className="cd-trainer">
              <div className="row">
                <div className="col-md-6">
                  <div className="cd-trainer-pic">
                    <img
                      src="/assets/img/classes/class-details/trainer-profile.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="cd-trainer-text">
                    <div className="trainer-title">
                      <h4>Athart Rachel</h4>
                      <span>Gym Trainer</span>
                    </div>
                    <div className="trainer-social">
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
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua viverra maecenas lacus vel facilisis.
                    </p>
                    <ul className="trainer-info">
                      <li>
                        <span>Age</span>35
                      </li>
                      <li>
                        <span>Weight</span>148lbs
                      </li>
                      <li>
                        <span>Height</span>10' 2``
                      </li>
                      <li>
                        <span>Occupation</span>no-founder
                      </li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua viverra maecenas lacus vel facilisis.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-8">
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
              <h5 className="title">Latest posts</h5>
              <div
                className="latest-large set-bg"
                style={{background:'url("/assets/img/letest-blog/latest-1.jpg")'}}
              >
                <div className="ll-text">
                  <h5>
                    <a href="#">
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
                    <a href="#">Grilled Potato and Green Bean Salad</a>
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
                    <a href="#">
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
                    <a href="#">Ina Garten's Skillet-Roasted Lemon Chicken</a>
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
                    <a href="#">
                      The Best Weeknight Baked Potatoes, 3 Creative Ways
                    </a>
                  </h6>
                  <span className="li-time">Aug 15, 2019</span>
                </div>
              </div>
            </div>
            <div
              className="so-banner set-bg"
              data-setbg="/assets/img/sidebar-banner.jpg"
              style={{background:'url("/assets/img/sidebar-banner.jpg")'}}
            >
              <h5>Banner 300x300</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Class Details Section End */}
  {/* Class Timetable Section Begin */}
  <section className="class-timetable-section class-details-timetable spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="class-details-timetable_title">
            <h5>Classes timetable</h5>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="class-timetable details-timetable">
            <table>
              <thead>
                <tr>
                  <th />
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                  <th>Sunday</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="class-time">6.00am - 8.00am</td>
                  <td
                    className="dark-bg hover-dp ts-meta"
                    data-tsmeta="workout"
                  >
                    <h5>WEIGHT LOOSE</h5>
                    <span>RLefew D. Loee</span>
                  </td>
                  <td className="hover-dp ts-meta" data-tsmeta="fitness">
                    <h5>Cardio</h5>
                    <span>RLefew D. Loee</span>
                  </td>
                  <td
                    className="dark-bg hover-dp ts-meta"
                    data-tsmeta="workout"
                  >
                    <h5>Yoga</h5>
                    <span>Keaf Shen</span>
                  </td>
                  <td className="hover-dp ts-meta" data-tsmeta="fitness">
                    <h5>Fitness</h5>
                    <span>Kimberly Stone</span>
                  </td>
                  <td className="dark-bg blank-td" />
                  <td className="hover-dp ts-meta" data-tsmeta="motivation">
                    <h5>Boxing</h5>
                    <span>Rachel Adam</span>
                  </td>
                  <td
                    className="dark-bg hover-dp ts-meta"
                    data-tsmeta="workout"
                  >
                    <h5>Body Building</h5>
                    <span>Robert Cage</span>
                  </td>
                </tr>
                <tr>
                  <td className="class-time">10.00am - 12.00am</td>
                  <td className="blank-td" />
                  <td
                    className="dark-bg hover-dp ts-meta"
                    data-tsmeta="fitness"
                  >
                    <h5>Fitness</h5>
                    <span>Kimberly Stone</span>
                  </td>
                  <td className="hover-dp ts-meta" data-tsmeta="workout">
                    <h5>WEIGHT LOOSE</h5>
                    <span>RLefew D. Loee</span>
                  </td>
                  <td
                    className="dark-bg hover-dp ts-meta"
                    data-tsmeta="motivation"
                  >
                    <h5>Cardio</h5>
                    <span>RLefew D. Loee</span>
                  </td>
                  <td className="hover-dp ts-meta" data-tsmeta="workout">
                    <h5>Body Building</h5>
                    <span>Robert Cage</span>
                  </td>
                  <td
                    className="dark-bg hover-dp ts-meta"
                    data-tsmeta="motivation"
                  >
                    <h5>Karate</h5>
                    <span>Donald Grey</span>
                  </td>
                  <td className="blank-td" />
                </tr>
                <tr>
                  <td className="class-time">5.00pm - 7.00pm</td>
                  <td
                    className="dark-bg hover-dp ts-meta"
                    data-tsmeta="fitness"
                  >
                    <h5>Boxing</h5>
                    <span>Rachel Adam</span>
                  </td>
                  <td className="hover-dp ts-meta" data-tsmeta="motivation">
                    <h5>Karate</h5>
                    <span>Donald Grey</span>
                  </td>
                  <td
                    className="dark-bg hover-dp ts-meta"
                    data-tsmeta="workout"
                  >
                    <h5>Body Building</h5>
                    <span>Robert Cage</span>
                  </td>
                  <td className="blank-td" />
                  <td
                    className="dark-bg hover-dp ts-meta"
                    data-tsmeta="workout"
                  >
                    <h5>Yoga</h5>
                    <span>Keaf Shen</span>
                  </td>
                  <td className="hover-dp ts-meta" data-tsmeta="motivation">
                    <h5>Cardio</h5>
                    <span>RLefew D. Loee</span>
                  </td>
                  <td
                    className="dark-bg hover-dp ts-meta"
                    data-tsmeta="fitness"
                  >
                    <h5>Fitness</h5>
                    <span>Kimberly Stone</span>
                  </td>
                </tr>
                <tr>
                  <td className="class-time">7.00pm - 9.00pm</td>
                  <td className="hover-dp ts-meta" data-tsmeta="motivation">
                    <h5>Cardio</h5>
                    <span>RLefew D. Loee</span>
                  </td>
                  <td className="dark-bg blank-td" />
                  <td className="hover-dp ts-meta" data-tsmeta="fitness">
                    <h5>Boxing</h5>
                    <span>Rachel Adam</span>
                  </td>
                  <td
                    className="dark-bg hover-dp ts-meta"
                    data-tsmeta="workout"
                  >
                    <h5>Yoga</h5>
                    <span>Keaf Shen</span>
                  </td>
                  <td className="hover-dp ts-meta" data-tsmeta="motivation">
                    <h5>Karate</h5>
                    <span>Donald Grey</span>
                  </td>
                  <td
                    className="dark-bg hover-dp ts-meta"
                    data-tsmeta="fitness"
                  >
                    <h5>Boxing</h5>
                    <span>Rachel Adam</span>
                  </td>
                  <td className="hover-dp ts-meta" data-tsmeta="workout">
                    <h5>WEIGHT LOOSE</h5>
                    <span>RLefew D. Loee</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Class Timetable Section End */}
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
  {/* Search model end */}
</>

        </>
    )
}