import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Testimonies from './Testimonies'

function About() {
  return (
    <div id="main-wrapper">
      <Header headerStyle="header header-transparent change-logo" />
      <div className="clearfix"></div>
      {/* ============================================================== */}
      {/* Top header  */}
      {/* ============================================================== */}

      <div
        className="hero-banner full bg-cover side-effect"
        style={{
          background:
            'red url(https://themezhub.net/workoo-demo/workoo/assets/img/about-bg.jpg)no-repeat',
        }}
        data-overlay="6"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-10">
              <h2 className="ipt-title mb-3">
                Establishing the best job platform.
              </h2>
              <p className="text-light mb-4">
                We are the donyfund, here to help you increase your fund with or
                without skills.
              </p>
              <div className="_ebl_link">
                <a href="/login" className="btn _loonking_job">
                  Get Started Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============================ Page Title End ================================== */}

      {/* ========================== About Elements ============================= */}
      <section>
        <div className="container">
          <div className="row align-items-center">
            {/* Single Box */}
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img
                src="https://themezhub.net/workoo-demo/workoo/assets/img/about.png"
                alt="about"
                className="img-fluid"
              />
            </div>

            {/* Single Box */}
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="about-captione">
                <h6 className="text-blue">About Donyfund</h6>
                <h2>
                  Let's Short Story About donyfund
                  <br />
                  Job Service.
                </h2>
                <p>
                  When tech is top in town, working become more easier. When
                  people don't want to stress much in work, there is always a
                  way out. Donyfund started from a US base freelencer who has
                  been frustrated by his boss and nature of his job. He joined
                  freelenser platforms to make designs to help him acheive his
                  dreams. He later realised the need to establish a platform of
                  work for both skilled, little or no knowledge about online
                  work. Dunnyfund is one of the fast growing working platform
                  for you.
                </p>
                <ul className="lists-3 mt-3">
                  <li>Start up now and never regret</li>
                  <li>Work and get money with ease</li>
                  <li>No need to carry files looking for a job</li>
                </ul>
                <a href="/login" className="btn dark-2 btn-rounded">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========================== About Elements ============================= */}

      {/* ========================== About Elements ============================= */}
      <section className="gray-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9">
              <div className="sec-heading">
                <h2>
                  Power Success For <span className="theme-cl-2">Brand</span>
                </h2>
                <p>
                  We joke not with our clients workers, we make sure both paties
                  are satisfied{' '}
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="achievement-wrap">
                <div className="achievement-content">
                  <div className="ache-icon purple">
                    <i className="ti-agenda"></i>
                  </div>
                  <h4>
                    <span className="cto count">9.8</span>M
                  </h4>
                  <p>Listing Posted</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="achievement-wrap">
                <div className="achievement-content">
                  <div className="ache-icon green">
                    <i className="ti-user"></i>
                  </div>
                  <h4>
                    <span className="cto count">200</span>K
                  </h4>
                  <p>Total Authors</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="achievement-wrap">
                <div className="achievement-content">
                  <div className="ache-icon yellow">
                    <i className="ti-medall-alt"></i>
                  </div>
                  <h4>
                    <span className="cto count">99</span>K
                  </h4>
                  <p>Win Awards</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="achievement-wrap">
                <div className="achievement-content">
                  <div className="ache-icon red">
                    <i className="ti-face-smile"></i>
                  </div>
                  <h4>
                    <span className="cto count">7.2</span>M
                  </h4>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========================== About Elements ============================= */}

      {/* ========================== About Elements ============================= */}
      <section className="min-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9">
              <div className="sec-heading">
                <h2>
                  Our Professional <span className="theme-cl-2">Team</span>
                </h2>
                <p>
                  Our great devoted tem members working so hard in making
                  donyfund what it is today.
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            {/* Single */}

            {/* Single */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="team-grid">
                <div className="teamgrid-user">
                  <img
                    src="/assets/teamw-3.jpg"
                    alt="team-2"
                    className="img-fluid"
                  />
                </div>

                <div className="teamgrid-content">
                  <h4>Shivangi Preet</h4>
                  <span>Team Manager</span>
                </div>

                <div className="teamgrid-social">
                  <ul>
                    <li>
                      <Link to="#" className="f-cl" tabIndex="0">
                        <i className="ti-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="t-cl" tabIndex="0">
                        <i className="ti-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="i-cl" tabIndex="0">
                        <i className="ti-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="l-cl" tabIndex="0">
                        <i className="ti-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Single */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="team-grid">
                <div className="teamgrid-user">
                  <img
                    src="/assets/team-m.jpg"
                    alt="team-3"
                    className="img-fluid"
                  />
                </div>

                <div className="teamgrid-content">
                  <h4>Yash Preet</h4>
                  <span>Accountant</span>
                </div>

                <div className="teamgrid-social">
                  <ul>
                    <li>
                      <Link to="#" className="f-cl" tabIndex="0">
                        <i className="ti-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="t-cl" tabIndex="0">
                        <i className="ti-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="i-cl" tabIndex="0">
                        <i className="ti-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="l-cl" tabIndex="0">
                        <i className="ti-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Single */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="team-grid">
                <div className="teamgrid-user">
                  <img
                    src="/assets/teamw.jpg"
                    alt="team-4"
                    className="img-fluid"
                  />
                </div>

                <div className="teamgrid-content">
                  <h4>Dhananjay Preet</h4>
                  <span>Recruiter</span>
                </div>

                <div className="teamgrid-social">
                  <ul>
                    <li>
                      <Link to="#" className="f-cl" tabIndex="0">
                        <i className="ti-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="t-cl" tabIndex="0">
                        <i className="ti-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="i-cl" tabIndex="0">
                        <i className="ti-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="l-cl" tabIndex="0">
                        <i className="ti-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Single */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="team-grid">
                <div className="teamgrid-user">
                  <img
                    src="/assets/team.jpg"
                    alt="team-5"
                    className="img-fluid"
                  />
                </div>

                <div className="teamgrid-content">
                  <h4>Rahul Gilkrist</h4>
                  <span>Web Designer</span>
                </div>

                <div className="teamgrid-social">
                  <ul>
                    <li>
                      <Link to="#" className="f-cl" tabIndex="0">
                        <i className="ti-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="t-cl" tabIndex="0">
                        <i className="ti-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="i-cl" tabIndex="0">
                        <i className="ti-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="l-cl" tabIndex="0">
                        <i className="ti-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Single */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="team-grid">
                <div className="teamgrid-user">
                  <img
                    src="/assets/teamw1.jpg"
                    alt="team-1"
                    className="img-fluid"
                  />
                </div>

                <div className="teamgrid-content">
                  <h4>Adam Olivia</h4>
                  <span>Developer</span>
                </div>

                <div className="teamgrid-social">
                  <ul>
                    <li>
                      <Link to="#" className="f-cl" tabIndex="0">
                        <i className="ti-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="t-cl" tabIndex="0">
                        <i className="ti-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="i-cl" tabIndex="0">
                        <i className="ti-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="l-cl" tabIndex="0">
                        <i className="ti-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Single */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="team-grid">
                <div className="teamgrid-user">
                  <img
                    src="/assets/teamw-4.jpg"
                    alt="team-2"
                    className="img-fluid"
                  />
                </div>

                <div className="teamgrid-content">
                  <h4>Rajni Kantio</h4>
                  <span>Marketing Manager</span>
                </div>

                <div className="teamgrid-social">
                  <ul>
                    <li>
                      <Link to="#" className="f-cl" tabIndex="0">
                        <i className="ti-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="t-cl" tabIndex="0">
                        <i className="ti-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="i-cl" tabIndex="0">
                        <i className="ti-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="l-cl" tabIndex="0">
                        <i className="ti-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Single */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="team-grid">
                <div className="teamgrid-user">
                  <img
                    src="/assets/team-m-4.jpg"
                    alt="team-3"
                    className="img-fluid"
                  />
                </div>

                <div className="teamgrid-content">
                  <h4>Rahul Rio Singh</h4>
                  <span>Instructor</span>
                </div>

                <div className="teamgrid-social">
                  <ul>
                    <li>
                      <Link to="#" className="f-cl" tabIndex="0">
                        <i className="ti-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="t-cl" tabIndex="0">
                        <i className="ti-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="i-cl" tabIndex="0">
                        <i className="ti-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="l-cl" tabIndex="0">
                        <i className="ti-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========================== About Elements ============================= */}

      {/* ============================ Featured Themes Start ==================================== */}
      <Testimonies styleProp="gray-light" />

      <Footer />
    </div>
  )
}

export default About
