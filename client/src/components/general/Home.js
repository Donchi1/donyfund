import React from 'react'

import Footer from './Footer'
import Header from './Header'
import Testimonies from './Testimonies'

function Home() {
  return (
    <div id="main-wrapper ">
      <div className="clearfix"></div>

      <Header headerStyle="header header-transparent change-logo" />
      {/* ============================ Hero Banner  Start================================== */}
      <div
        className="hero-banner full bg-cover center"
        style={{
          background:
            '#df3411 url(https://themezhub.net/workoo-demo/workoo/assets/img/banner-3.jpg) no-repeat',
        }}
        data-overlay="7"
      >
        <div className="container">
          <h1>
            <span className="count">5712</span> Trending Jobs Found
          </h1>
          <p className="lead">
            World #01 job found website to build your dream!
          </p>
        </div>
      </div>
      {/* ============================ Hero Banner End ================================== */}

      {/* ============================ How It Work Start ==================================== */}

      <section className="how-it-works">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9">
              <div className="sec-heading">
                <h2>
                  How It <span className="theme-cl-2">Works?</span>
                </h2>
                <p>
                  We stand out as one great platform to make you established
                  without much struggles..
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 col-sm-4">
              <div className="working-process">
                <span className="process-img">
                  <img
                    src="https://themezhub.net/workoo-demo/workoo/assets/img/step-1.png"
                    className="img-responsive"
                    alt="step-1"
                  />
                  <span className="process-num">01</span>
                </span>
                <h4>Create An Account</h4>
                <p>
                  Register with your details and you are good to make your
                  wealth.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="working-process">
                <span className="process-img">
                  <img
                    src="https://themezhub.net/workoo-demo/workoo/assets/img/step-2.png"
                    className="img-responsive"
                    alt="step-2"
                  />
                  <span className="process-num">02</span>
                </span>
                <h4>Search Jobs</h4>
                <p>
                  You make a job search according to the list the of jobs that
                  we make available.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="working-process">
                <span className="process-img">
                  <img
                    src="https://themezhub.net/workoo-demo/workoo/assets/img/step-3.png"
                    className="img-responsive"
                    alt="step-3"
                  />
                  <span className="process-num">03</span>
                </span>
                <h4>Save & Apply</h4>
                <p>Save and finish the job, your payment is ready.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============================ How It Work End ==================================== */}

      {/* ============================ Join And Hire Start ==================================== */}
      <section className="p-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-6 bl-dark">
              <div className="call-to-act-caption">
                <h2>Work from home as an expert or beginner. Start now!!</h2>
                <h3>
                  {' '}
                  Are you an Expert or beginner in working from home or online?
                  here is a great start for you. Make your wealth in due time
                  without stress.
                </h3>
                <a href="/register" className="btn bat-call-to-act">
                  Start Up
                </a>
              </div>
            </div>

            <div className="col-md-6 col-sm-6 dark-2">
              <div className="call-to-act-caption">
                <h2>You are in the right place to work from home</h2>
                <h3>
                  We provide you with a stable reliable working platform, don't
                  have to struggle with files again.
                </h3>
                <a href="/login" className="btn bat-call-to-act">
                  Join Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============================ Join And Hire End ==================================== */}

      {/* ============================ Featured Themes Start ==================================== */}
      <Testimonies styleProp="light-w" />

      {/* ============================ Featured Themes End ==================================== */}

      <section className="min-sec ">
        <div className="container ">
          <div className="row text-center">
            <div className="col-lg-12 col-md-12">
              <h2 className="ipt-title">FAQ's</h2>
              <span className="ipn-subtitle">Frequently Asked Question</span>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="container ">
            <div className="row">
              {/* Single blog Grid */}
              <div className="col-12">
                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link btn-block text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          How Donyfund Work?
                        </button>
                      </h2>
                    </div>

                    <div
                      id="collapseOne"
                      className="collapse"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        Rgister in donyfund, submit your cv, work and start
                        earning.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link btn-block text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          How can i get paid?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        You will get your payment weekly through the company
                        provided payment methods.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link btn-block text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          When will i get paid?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        Donyfund run a weeky payout to all workers in our
                        platform.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link btn-block text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapsefour"
                          aria-expanded="false"
                          aria-controls="collapsefour"
                        >
                          How long will i work?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapsefour"
                      className="collapse"
                      aria-labelledby="headingfour"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        You are not limited to any hour of work. Work and
                        receive your payment in due time.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

      <Footer />
    </div>
  )
}

export default Home
