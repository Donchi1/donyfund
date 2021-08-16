import React from 'react'
import { ListGroup } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import Footer from '../general/Footer'
import NavigationRoute from './NavigationRoute'

const JobList = () => {
  return (
    <div id="main-wrapper">
      <div className="clearfix"></div>

      {/* ============================ Page Title Start================================== */}
      <div
        className="page-title bg-cover"
        style={{
          background:
            'url(https://themezhub.net/workoo-demo/workoo/assets/img/bn-1.jpg)no-repeat',
        }}
        data-overlay="5"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12"></div>
          </div>
        </div>
      </div>
      {/* ============================ Page Title End ================================== */}

      {/* ============================ Main Section Start ================================== */}
      <section className="gray-bg pt-4">
        <div className="container-fluid">
          <div className="row m-0">
            <NavigationRoute />
            {/* Item Wrap Start */}
            <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  {/* Breadcrumbs */}
                  <div className="bredcrumb_wrap">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="/">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="/user/dashboard">Dashboard</a>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Joblist
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              <section className="min-sec ">
                <div className="container ">
                  <div className="row text-center">
                    <div className="col-lg-12 col-md-12">
                      <h2 className="ipt-title">Job List</h2>
                      <span className="ipn-subtitle">
                        Choose a job from our joblist and recieve your payment
                        in due time.
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
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
                                  Advertising
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
                                <ListGroup className="text-bold">
                                  <Link to="/user/jobs/joblist/advertjob/carsales">
                                    <ListGroup.Item>Car sales</ListGroup.Item>
                                  </Link>
                                  <Link to="/user/jobs/joblist/advertjob/ecommerce">
                                    <ListGroup.Item>ecommerce</ListGroup.Item>
                                  </Link>

                                  <Link to="/user/jobs/joblist/advertjob/accessories">
                                    <ListGroup.Item>Acessories</ListGroup.Item>
                                  </Link>
                                </ListGroup>
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
                                  Blog Writing
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
                                <ListGroup className="text-bold">
                                  <Link to="/user/jobs/joblist/blogsjobs/covid19">
                                    <ListGroup.Item>Covid19</ListGroup.Item>
                                  </Link>
                                  <Link to="/user/jobs/joblist/blogsjobs/education">
                                    <ListGroup.Item>Education</ListGroup.Item>
                                  </Link>
                                  <Link to="/user/jobs/joblist/blogsjobs/unemployment">
                                    <ListGroup.Item>
                                      Unemployment
                                    </ListGroup.Item>
                                  </Link>
                                  <Link to="/user/jobs/joblist/blogsjobs/politics">
                                    <ListGroup.Item>Politics</ListGroup.Item>
                                  </Link>
                                  <Link to="/user/jobs/joblist/blogsjobs/climate">
                                    <ListGroup.Item>Climate</ListGroup.Item>
                                  </Link>
                                  <Link to="/user/jobs/joblist/blogsjobs/life">
                                    <ListGroup.Item>Life</ListGroup.Item>
                                  </Link>
                                  <Link to="/user/jobs/joblist/blogsjobs/religion">
                                    <ListGroup.Item>Religion</ListGroup.Item>
                                  </Link>
                                  <Link to="/user/jobs/joblist/blogsjobs/friendship">
                                    <ListGroup.Item>Friendship</ListGroup.Item>
                                  </Link>
                                  <Link to="/user/jobs/joblist/blogsjobs/war">
                                    <ListGroup.Item>War</ListGroup.Item>
                                  </Link>
                                  <Link to="/user/jobs/joblist/blogsjobs/relationship">
                                    <ListGroup.Item>
                                      Relationship
                                    </ListGroup.Item>
                                  </Link>
                                </ListGroup>
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
                                  Article Writing
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
                                <ListGroup className="text-bold">
                                  <Link to="/user/jobs/joblist/articlejobs/articlejobdetails/school">
                                    <ListGroup.Item>School</ListGroup.Item>
                                  </Link>
                                  <Link to="/user/jobs/joblist/articlejobs/politics">
                                    <ListGroup.Item>Politics</ListGroup.Item>
                                  </Link>
                                  <Link to="/user/jobs/joblist/articlejobs/employment">
                                    <ListGroup.Item>Employments</ListGroup.Item>
                                  </Link>
                                  <Link to="/user/jobs/joblist/articlejobs/religion">
                                    <ListGroup.Item>Religion</ListGroup.Item>
                                  </Link>
                                  <Link to="/user/jobs/joblist/articlejobs/moral">
                                    <ListGroup.Item>Moral</ListGroup.Item>
                                  </Link>
                                  <Link to="/user/jobs/joblist/articlejobs/relationship">
                                    <ListGroup.Item>Reltionship</ListGroup.Item>
                                  </Link>
                                  <Link to="/user/jobs/joblist/articlejobs/love">
                                    <ListGroup.Item>love</ListGroup.Item>
                                  </Link>
                                  <Link to="/user/jobs/joblist/articlejobs/food">
                                    <ListGroup.Item>Food</ListGroup.Item>
                                  </Link>
                                  <Link to="/user/jobs/joblist/articlejobs/agriculture">
                                    <ListGroup.Item>Agriculture</ListGroup.Item>
                                  </Link>
                                  <Link to="/user/jobs/joblist/articlejobs/life">
                                    <ListGroup.Item>Life</ListGroup.Item>
                                  </Link>
                                  <Link to="/user/jobs/joblist/articlejobs/war">
                                    <ListGroup.Item>War</ListGroup.Item>
                                  </Link>
                                  <Link to="/user/jobs/joblist/articlejobs/education">
                                    <ListGroup.Item>Education</ListGroup.Item>
                                  </Link>
                                  <Link to="/user/jobs/joblist/articlejobs/technology">
                                    <ListGroup.Item>Technology</ListGroup.Item>
                                  </Link>
                                  <Link to="/user/jobs/joblist/articlejobs/friendship">
                                    <ListGroup.Item>Friendship</ListGroup.Item>
                                  </Link>
                                  <Link to="/user/jobs/joblist/articlejobs/depression">
                                    <ListGroup.Item>Depression</ListGroup.Item>
                                  </Link>
                                </ListGroup>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      {/* ============================ Main Section End ================================== */}
      <Footer />
    </div>
  )
}

export default JobList
