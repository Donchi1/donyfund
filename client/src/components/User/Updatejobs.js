import React from 'react'
import Footer from '../general/Footer'
import Header from '../general/Header'

function Updatejobs() {
  return (
    <>
      <div id="main-wrapper">
        <Header headerStyle="header header-light" />
        {/* End Navigation */}
        <div className="clearfix"></div>
        {/* ============================================================== */}
        {/* Top header  */}
        {/* ============================================================== */}

        {/* ============================ Page Title Start================================== */}
        <div
          className="page-title bg-cover"
          style={{
            background:
              'url(https://themezhub.net/workoo-demo/workoo/assets/img/bn-1.jpg)no-repeat;',
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
              <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12">
                <div className="dashboard-navbar overlio-top">
                  <div className="d-user-avater">
                    <img
                      src="https://themezhub.net/workoo-demo/workoo/assets/img/team-1.jpg"
                      className="img-fluid rounded"
                      alt="team-1"
                    />
                    <h4>Adam Harshvardhan</h4>
                    <span>Canada USA</span>
                  </div>

                  <div className="d-navigation">
                    <ul id="metismenu" className="metismenu">
                      <li className="active">
                        <a href="dashboard.html">
                          <i className="ti-dashboard"></i>Dashboard
                        </a>
                      </li>
                      <li>
                        <a href="my-profile.html">
                          <i className="ti-user"></i>My Profile
                        </a>
                      </li>
                      <li>
                        <a href="messages.html">
                          <i className="ti-email"></i>Messages
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="has-arrow"
                          aria-expanded="false"
                        >
                          <i className="ti-bookmark-alt"></i>Bookmark
                        </a>
                        <ul className="mm-collapse">
                          <li>
                            <a href="bookmark-jobs.html">Bookmark jobs</a>
                          </li>
                          <li>
                            <a href="bookmark-candidates.html">
                              Bookmark Candidates
                            </a>
                          </li>
                          <li>
                            <a href="bookmark-freelancers.html">
                              Bookmark Freelancers
                            </a>
                          </li>
                          <li>
                            <a href="bookmark-employers.html">
                              Bookmark Employers
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="reviews.html">
                          <i className="fa fa-star"></i>Reviews
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="has-arrow"
                          aria-expanded="false"
                        >
                          <i className="fa fa-briefcase"></i>Jobs
                        </a>
                        <ul className="mm-collapse">
                          <li>
                            <a href="manage-jobs.html">Manage Jobs</a>
                          </li>
                          <li>
                            <a href="manage-candidates.html">
                              Manage Candidates
                            </a>
                          </li>
                          <li>
                            <a href="manage-freelancers.html">
                              Manage Freelancers
                            </a>
                          </li>
                          <li>
                            <a href="manage-employers.html">Manage Employers</a>
                          </li>
                          <li>
                            <a href="create-reume.html">Create Resume</a>
                          </li>
                          <li>
                            <a href="post-job.html">Post A Job</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="has-arrow"
                          aria-expanded="false"
                        >
                          <i className="ti-desktop"></i>Tasks
                        </a>
                        <ul className="mm-collapse">
                          <li>
                            <a href="manage-task.html">Manage Task</a>
                          </li>
                          <li>
                            <a href="manage-bidders.html">Manage Bidders</a>
                          </li>
                          <li>
                            <a href="active-bids.html">My Active Bids</a>
                          </li>
                          <li>
                            <a href="post-task.html">Post A Task</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-power-off"></i>Log Out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Item Wrap Start */}
              <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    {/* Breadcrumbs */}
                    <div className="bredcrumb_wrap">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <a href="#">Home</a>
                          </li>
                          <li className="breadcrumb-item">
                            <a href="#">Dashboard</a>
                          </li>
                          <li
                            className="breadcrumb-item active"
                            aria-current="page"
                          >
                            Reviews
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    {/* Single Wrap */}
                    <div className="_dashboard_content">
                      <div className="_dashboard_content_header">
                        <div className="_dashboard__header_flex">
                          <h4>
                            <i className="ti-briefcase mr-1"></i>Manage Jobs
                          </h4>
                        </div>
                      </div>

                      <div className="_dashboard_content_body p-0">
                        <div className="_dashboard_list_group">
                          {/* Single List jobs */}
                          <div className="_dash_singl_box">
                            <div className="_dash_singl_thumbs">
                              <img
                                src="https://themezhub.net/workoo-demo/workoo/assets/img/c-1.png"
                                className="img-fluid"
                                alt="c-1"
                              />
                            </div>
                            <div className="_dash_singl_captions">
                              <h4 className="_jb_title">
                                <a href="#">Product Web Designer Permanent</a>
                                <span className="_dash_status approval">
                                  pending Approval
                                </span>
                              </h4>
                              <ul className="_grouping_list">
                                <li>
                                  <span>
                                    <i className="ti-location-pin"></i>Denever,
                                    USA
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="ti-credit-card"></i>$110k -
                                    $130k
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="ti-timer"></i>Expiring on 10
                                    Feb
                                  </span>
                                </li>
                              </ul>
                              <ul className="_action_grouping_list">
                                <li>
                                  <a href="#" className="_aaplied_candidates">
                                    Applied<span>42</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Edit job"
                                    className="_edit_list_point"
                                    data-tooltip-id="e0045354-8152-6808-f3fc-44cd054d0377"
                                  >
                                    <i className="fa fa-edit"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Delete Job"
                                    className="_delete_point"
                                    data-tooltip-id="deb33671-93a6-886d-ac1a-34bc3e564ee9"
                                  >
                                    <i className="fa fa-trash"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          {/* Single List jobs */}
                          <div className="_dash_singl_box">
                            <div className="_dash_singl_thumbs">
                              <img
                                src="https://themezhub.net/workoo-demo/workoo/assets/img/c-2.png"
                                className="img-fluid"
                                alt="c-2"
                              />
                            </div>
                            <div className="_dash_singl_captions">
                              <h4 className="_jb_title">
                                <a href="#">
                                  <img
                                    src="https://themezhub.net/workoo-demo/workoo/assets/img/verify.svg"
                                    className="mr-1"
                                    width="10"
                                    alt="verify"
                                  />
                                  SEO Expert in Our Projects
                                </a>
                                <span className="_dash_status expired">
                                  Expired
                                </span>
                              </h4>
                              <ul className="_grouping_list">
                                <li>
                                  <span>
                                    <i className="ti-location-pin"></i>Montreal,
                                    USA
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="ti-credit-card"></i>$60k -
                                    $90k
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="ti-timer"></i>Expiring on 10
                                    Apr
                                  </span>
                                </li>
                              </ul>
                              <ul className="_action_grouping_list">
                                <li>
                                  <a href="#" className="_aaplied_candidates">
                                    Applied<span>07</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Featured job"
                                    className="_featured_point"
                                    data-tooltip-id="c844abbf-5228-16b4-d821-96a88c80ab54"
                                  >
                                    <i className="fa fa-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Edit job"
                                    className="_edit_list_point"
                                    data-tooltip-id="c9b26042-e76d-7e5a-5ab5-9d345c94c1fc"
                                  >
                                    <i className="fa fa-edit"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Delete Job"
                                    className="_delete_point"
                                    data-tooltip-id="c2d39461-fd97-35bf-3f69-fc59b8fdeaf7"
                                  >
                                    <i className="fa fa-trash"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          {/* Single List jobs */}
                          <div className="_dash_singl_box">
                            <div className="_dash_singl_thumbs">
                              <img
                                src="https://themezhub.net/workoo-demo/workoo/assets/img/c-3.png"
                                className="img-fluid"
                                alt="c-3"
                              />
                            </div>
                            <div className="_dash_singl_captions">
                              <h4 className="_jb_title">
                                <a href="#">HTML To Magento Conversion Work</a>
                                <span className="_dash_status approval">
                                  Pending Approval
                                </span>
                              </h4>
                              <ul className="_grouping_list">
                                <li>
                                  <span>
                                    <i className="ti-location-pin"></i>
                                    Liverpool, UK
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="ti-credit-card"></i>$80k -
                                    $105k
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="ti-timer"></i>Expiring on 10
                                    Nov
                                  </span>
                                </li>
                              </ul>
                              <ul className="_action_grouping_list">
                                <li>
                                  <a href="#" className="_aaplied_candidates">
                                    Applied<span>20</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Edit job"
                                    className="_edit_list_point"
                                    data-tooltip-id="e3fa958a-59e0-9e90-647a-f516d72c40c5"
                                  >
                                    <i className="fa fa-edit"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Delete Job"
                                    className="_delete_point"
                                    data-tooltip-id="836480cd-6c9a-ddcd-f0b7-bb3514f361db"
                                  >
                                    <i className="fa fa-trash"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          {/* Single List jobs */}
                          <div className="_dash_singl_box">
                            <div className="_dash_singl_thumbs">
                              <img
                                src="https://themezhub.net/workoo-demo/workoo/assets/img/c-4.png"
                                className="img-fluid"
                                alt="c-4"
                              />
                            </div>
                            <div className="_dash_singl_captions">
                              <h4 className="_jb_title">
                                <a href="#">
                                  <img
                                    src="https://themezhub.net/workoo-demo/workoo/assets/img/verify.svg"
                                    className="mr-1"
                                    width="10"
                                    alt="verify"
                                  />
                                  HTML To WordPress Development
                                </a>
                                <span className="_dash_status expiring">
                                  Expiring
                                </span>
                              </h4>
                              <ul className="_grouping_list">
                                <li>
                                  <span>
                                    <i className="ti-location-pin"></i>Canada,
                                    USA
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="ti-credit-card"></i>$110k -
                                    $2000k
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="ti-timer"></i>Expiring on 10
                                    May
                                  </span>
                                </li>
                              </ul>
                              <ul className="_action_grouping_list">
                                <li>
                                  <a href="#" className="_aaplied_candidates">
                                    Applied<span>15</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Edit job"
                                    className="_edit_list_point"
                                    data-tooltip-id="e4768cda-00ab-d1b9-4051-c41c60a20654"
                                  >
                                    <i className="fa fa-edit"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Delete Job"
                                    className="_delete_point"
                                    data-tooltip-id="79339beb-910c-edce-aabc-35e496a882f5"
                                  >
                                    <i className="fa fa-trash"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          {/* Single List jobs */}
                          <div className="_dash_singl_box">
                            <div className="_dash_singl_thumbs">
                              <img
                                src="https://themezhub.net/workoo-demo/workoo/assets/img/c-5.png"
                                className="img-fluid"
                                alt="c-5"
                              />
                            </div>
                            <div className="_dash_singl_captions">
                              <h4 className="_jb_title">
                                <a href="#">UI/UX Design For Real Estate</a>
                                <span className="_dash_status approval">
                                  Pending Approval
                                </span>
                              </h4>
                              <ul className="_grouping_list">
                                <li>
                                  <span>
                                    <i className="ti-location-pin"></i>Denever,
                                    USA
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="ti-credit-card"></i>$80k -
                                    $120k
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="ti-timer"></i>Expiring on 07
                                    Dec
                                  </span>
                                </li>
                              </ul>
                              <ul className="_action_grouping_list">
                                <li>
                                  <a href="#" className="_aaplied_candidates">
                                    Applied<span>45</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Featured job"
                                    className="_featured_point"
                                    data-tooltip-id="203f761f-7f6d-8d26-104b-1ae4857f2514"
                                  >
                                    <i className="fa fa-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Edit job"
                                    className="_edit_list_point"
                                    data-tooltip-id="324da66a-4a36-bd67-4c28-a8a91763eb76"
                                  >
                                    <i className="fa fa-edit"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Delete Job"
                                    className="_delete_point"
                                    data-tooltip-id="b59584ab-20bb-ebb1-0c6c-2ce03defea7a"
                                  >
                                    <i className="fa fa-trash"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          {/* Single List jobs */}
                          <div className="_dash_singl_box">
                            <div className="_dash_singl_thumbs">
                              <img
                                src="https://themezhub.net/workoo-demo/workoo/assets/img/c-6.png"
                                className="img-fluid"
                                alt="c-6"
                              />
                            </div>
                            <div className="_dash_singl_captions">
                              <h4 className="_jb_title">
                                <a href="#">UI For IOS Development</a>
                                <span className="_dash_status expired">
                                  Expired
                                </span>
                              </h4>
                              <ul className="_grouping_list">
                                <li>
                                  <span>
                                    <i className="ti-location-pin"></i>
                                    Liverpool, London
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="ti-credit-card"></i>$40k -
                                    $98k
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="ti-timer"></i>Expiring on 15
                                    Aug
                                  </span>
                                </li>
                              </ul>
                              <ul className="_action_grouping_list">
                                <li>
                                  <a href="#" className="_aaplied_candidates">
                                    Applied<span>04</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Edit job"
                                    className="_edit_list_point"
                                    data-tooltip-id="48d8dc41-86d2-7004-fd9f-870f9ff27017"
                                  >
                                    <i className="fa fa-edit"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Delete Job"
                                    className="_delete_point"
                                    data-tooltip-id="9a20e684-fc66-5fcf-9283-b571f924aebd"
                                  >
                                    <i className="fa fa-trash"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Single Wrap End */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============================ Main Section End ================================== */}

        {/* ============================ Call To Action Start ================================== */}
        <section
          className="call-to-act"
          style={{
            background:
              '#2944c1 url(https://themezhub.net/workoo-demo/workoo/assets/img/landing-bg.png) no-repeat',
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-8">
                <div className="clt-caption text-center mb-4">
                  <h3 className="text-light">Subscribe Now!</h3>
                  <p className="text-light">
                    Simple pricing plans. Unlimited web maintenance service
                  </p>
                </div>
                <div className="inner-flexible-box subscribe-box">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control large"
                      placeholder="Enter your mail here"
                    />
                    <button className="btn btn-subscribe bg-dark" type="button">
                      <i className="fa fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============================ Call To Action End ================================== */}
        <Footer />
        {/* =========================== Footer End ========================================= */}
      </div>

      <div
        className="material-tooltip"
        id="e0045354-8152-6808-f3fc-44cd054d0377"
      >
        <span></span>
        <div className="backdrop"></div>
      </div>
      <div
        className="material-tooltip"
        id="deb33671-93a6-886d-ac1a-34bc3e564ee9"
      >
        <span></span>
        <div className="backdrop"></div>
      </div>
      <div
        className="material-tooltip"
        id="c844abbf-5228-16b4-d821-96a88c80ab54"
      >
        <span></span>
        <div className="backdrop"></div>
      </div>
      <div
        className="material-tooltip"
        id="c9b26042-e76d-7e5a-5ab5-9d345c94c1fc"
      >
        <span></span>
        <div className="backdrop"></div>
      </div>
      <div
        className="material-tooltip"
        id="c2d39461-fd97-35bf-3f69-fc59b8fdeaf7"
        style={{
          display: 'none',
          left: '4px',
          top: '1796px',
          marginTop: '0px',
          marginLeft: '0px',
          opacity: '0',
        }}
      >
        <span></span>
        <div
          className="backdrop"
          style={{
            top: '0px',
            left: '0px',
            marginLeft: '0px',
            display: 'none',
            transform: 'scaleX(1) scaleY(1)',
            opacity: '0',
          }}
        ></div>
      </div>
      <div
        className="material-tooltip"
        id="e3fa958a-59e0-9e90-647a-f516d72c40c5"
      >
        <span></span>
        <div className="backdrop"></div>
      </div>
      <div
        className="material-tooltip"
        id="836480cd-6c9a-ddcd-f0b7-bb3514f361db"
      >
        <span></span>
        <div className="backdrop"></div>
      </div>
      <div
        className="material-tooltip"
        id="e4768cda-00ab-d1b9-4051-c41c60a20654"
      >
        <span></span>
        <div className="backdrop"></div>
      </div>
      <div
        className="material-tooltip"
        id="79339beb-910c-edce-aabc-35e496a882f5"
      >
        <span></span>
        <div className="backdrop"></div>
      </div>
      <div
        className="material-tooltip"
        id="203f761f-7f6d-8d26-104b-1ae4857f2514"
      >
        <span></span>
        <div className="backdrop"></div>
      </div>
      <div
        className="material-tooltip"
        id="324da66a-4a36-bd67-4c28-a8a91763eb76"
      >
        <span></span>
        <div className="backdrop"></div>
      </div>
      <div
        className="material-tooltip"
        id="b59584ab-20bb-ebb1-0c6c-2ce03defea7a"
      >
        <span></span>
        <div className="backdrop"></div>
      </div>
      <div
        className="material-tooltip"
        id="48d8dc41-86d2-7004-fd9f-870f9ff27017"
      >
        <span></span>
        <div className="backdrop"></div>
      </div>
      <div
        className="material-tooltip"
        id="9a20e684-fc66-5fcf-9283-b571f924aebd"
      >
        <span></span>
        <div className="backdrop"></div>
      </div>
    </>
  )
}

export default Updatejobs
