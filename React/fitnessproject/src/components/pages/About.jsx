import { Link } from "react-router-dom";

export default function About(){
    return(
        <>
        <>
  
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
              <Link to="/">Home</Link>
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
  
</>

        </>
    )
}