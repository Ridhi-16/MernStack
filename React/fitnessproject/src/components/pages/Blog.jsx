import { Link } from "react-router-dom";


export default function Blog(){
    return(
        <>
        <>
  
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
                <Link to="/blogdetails">
                  Vegan White Peach Mug Cobbler With Cardam Vegan White Peach
                  Mug Cobbler...
                </Link>
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
 
  
</>

        </>
    )
}