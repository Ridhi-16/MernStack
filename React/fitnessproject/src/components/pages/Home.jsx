import Header from "../../layouts/Header"
export default function Home(){
    return(
        <>
        <>
        <Header/>
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
              <img src="/assets/img/classes/class-1.jpg" alt="" />
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
              <img src="/assets/img/classes/class-2.jpg" alt="" />
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
              <img src="/assets/img/classes/class-3.jpg" alt="" />
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
              <img src="/assets/img/classes/class-4.jpg" alt="" />
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
              <img src="/assets/img/classes/class-5.jpg" alt="" />
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
  <section className="banner-section set-bg"style={{backgroundImage:'url("/assets/img/banner-bg.jpg")'}}    >
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
        style={{backgroundImage:'url("/assets/img/gallery/gallery-1.jpg")'}}
      >
        <a href="/assets/img/gallery/gallery-1.jpg" className="thumb-icon image-popup">
          <i className="fa fa-picture-o" />
        </a>
      </div>
      <div className="gs-item set-bg" style={{backgroundImage:'url("/assets/img/gallery/gallery-2.jpg")'}}>
        <a href="/assets/img/gallery/gallery-2.jpg" className="thumb-icon image-popup">
          <i className="fa fa-picture-o" />
        </a>
      </div>
      <div className="gs-item set-bg" style={{backgroundImage:'url("/assets/img/gallery/gallery-3.jpg")'}}>
        <a href="/assets/img/gallery/gallery-3.jpg" className="thumb-icon image-popup">
          <i className="fa fa-picture-o" />
        </a>
      </div>
      <div className="gs-item set-bg" style={{backgroundImage:'url("/assets/img/gallery/gallery-4.jpg")'}}>
        <a href="/assets/img/gallery/gallery-4.jpg" className="thumb-icon image-popup">
          <i className="fa fa-picture-o" />
        </a>
      </div>
      <div className="gs-item set-bg" style={{backgroundImage:'url("/assets/img/gallery/gallery-5.jpg")'}}>
        <a href="/assets/img/gallery/gallery-5.jpg" className="thumb-icon image-popup">
          <i className="fa fa-picture-o" />
        </a>
      </div>
      <div
        className="gs-item grid-wide set-bg" style={{backgroundImage:'url("/assets/img/gallery/gallery-1.jpg")'}}>
        <a href="/assets/img/gallery/gallery-6.jpg" className="thumb-icon image-popup">
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
            <div className="ts-item set-bg" style={{backgroundImage:'url("/assets/img/team/team-1.jpg")'}}>
              <div className="ts_text">
                <h4>Athart Rachel</h4>
                <span>Gym Trainer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ts-item set-bg" style={{backgroundImage:'url("/assets/img/team/team-2.jpg")'}}>
              <div className="ts_text">
                <h4>Athart Rachel</h4>
                <span>Gym Trainer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ts-item set-bg" style={{backgroundImage:'url("/assets/img/team/team-3.jpg")'}}>
              <div className="ts_text">
                <h4>Athart Rachel</h4>
                <span>Gym Trainer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ts-item set-bg" style={{backgroundImage:'url("/assets/img/team/team-4.jpg")'}}>
              <div className="ts_text">
                <h4>Athart Rachel</h4>
                <span>Gym Trainer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ts-item set-bg" style={{backgroundImage:'url("/assets/img/team/team-5.jpg")'}}>
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