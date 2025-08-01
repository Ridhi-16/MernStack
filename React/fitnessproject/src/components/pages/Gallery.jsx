export default function Gallery(){
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
            <h2>Gallery</h2>
            <div className="bt-option">
              <a href="./index.html">Home</a>
              <a href="#">Pages</a>
              <span>Gallery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrumb Section End */}
  {/* Gallery Section Begin */}
  <div className="gallery-section gallery-page">
    <div className="gallery">
      <div className="grid-sizer" />
      <div
        className="gs-item grid-wide set-bg"
       
        style={{background:'url("/assets/img/gallery/gallery-1.jpg")'}}
        
      >
        <a href="/assets/img/gallery/gallery-1.jpg" className="thumb-icon image-popup">
          <i className="fa fa-picture-o" />
        </a>
      </div>
      <div className="gs-item set-bg"  style={{background:'url("/assets/img/gallery/gallery-2.jpg")'}}>
        <a href="/assets/img/gallery/gallery-2.jpg" className="thumb-icon image-popup">
          <i className="fa fa-picture-o" />
        </a>
      </div>
      <div className="gs-item set-bg" 
      style={{background:'url("/assets/img/gallery/gallery-3.jpg")'}}>
        <a href="/assets/img/gallery/gallery-3.jpg" className="thumb-icon image-popup">
          <i className="fa fa-picture-o" />
        </a>
      </div>
      <div className="gs-item set-bg" 
      style={{background:'url("/assets/img/gallery/gallery-4.jpg")'}}>
        <a href="/assets/img/gallery/gallery-4.jpg" className="thumb-icon image-popup">
          <i className="fa fa-picture-o" />
        </a>
      </div>
      <div className="gs-item set-bg" 
      style={{background:'url("/assets/img/gallery/gallery-5.jpg")'}}>
        <a href="/assets/img/gallery/gallery-5.jpg" className="thumb-icon image-popup">
          <i className="fa fa-picture-o" />
        </a>
      </div>
      <div
        className="gs-item grid-wide set-bg"
       
        style={{background:'url("/assets/img/gallery/gallery-6.jpg")'}}
      >
        <a href="/assets/img/gallery/gallery-6.jpg" className="thumb-icon image-popup">
          <i className="fa fa-picture-o" />
        </a>
      </div>
      <div
        className="gs-item grid-wide set-bg"
        
        style={{background:'url("/assets/img/gallery/gallery-7.jpg")'}}
      >
        <a href="/assets/img/gallery/gallery-7.jpg" className="thumb-icon image-popup">
          <i className="fa fa-picture-o" />
        </a>
      </div>
      <div className="gs-item set-bg" 
      style={{background:'url("/assets/img/gallery/gallery-8.jpg")'}}>
        <a href="/assets/img/gallery/gallery-8.jpg" className="thumb-icon image-popup">
          <i className="fa fa-picture-o" />
        </a>
      </div>
      <div className="gs-item set-bg" 
      style={{background:'url("/assets/img/gallery/gallery-9.jpg")'}}>
        <a href="/assets/img/gallery/gallery-9.jpg" className="thumb-icon image-popup">
          <i className="fa fa-picture-o" />
        </a>
      </div>
    </div>
  </div>
  {/* Gallery Section End */}
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