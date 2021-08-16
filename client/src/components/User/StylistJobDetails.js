import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Footer from '../general/Footer'
import * as Icons from 'react-bootstrap-icons'

function StylistJobDetails() {
  const { slug } = useParams()

  const [userWork, setUserWork] = useState({
    file: '',
    work: '',
  })
  const [userMessage, setUserMessage] = useState('')

  const handleUserMessage = (e) => {
    e.preventDefault()

    /// redux action

    setUserMessage('')
  }
  const handleUserWork = (e) => {
    e.preventDefault()
    if (userWork.file === '' && userWork.work === '') return
    /// redux action

    setUserWork({ ...userWork, file: '', work: '' })
  }

  return (
    <div id="main-wrapper">
      {/* ============================ Page Title Start================================== */}
      <div className="page-title search-form dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="_jb_details01">
                <div className="_jb_details01_flex">
                  <div className="_jb_details01_authors">
                    <img
                      src="https://themezhub.net/workoo-demo/workoo/assets/img/c-7.png"
                      className="img-fluid"
                      alt="c-7"
                    />
                  </div>
                  <div className="_jb_details01_authors_caption">
                    <h4 className="jbs_title text-capitalize">
                      {slug} styling Jobs.
                      <img
                        src="https://themezhub.net/workoo-demo/workoo/assets/img/verify.svg"
                        className="ml-1"
                        width="12"
                        alt="verify"
                      />
                    </h4>
                    <ul className="jbx_info_list">
                      <li>
                        <span>
                          <i className="ti-briefcase"></i>InVision
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ti-credit-card"></i>$15
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ti-location-pin"></i>Canada, USA
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ti-timer"></i>10 min ago
                        </span>
                      </li>
                    </ul>
                    <ul className="jbx_info_list">
                      <li>
                        <div className="jb_types fulltime">Full Time</div>
                      </li>
                      <li>
                        <div className="jb_types urgent">Urgent</div>
                      </li>
                      <li>
                        <div className="jb_types remote">Remote</div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="_jb_details01_last">
                  <ul className="_flex_btn">
                    <li>
                      <span className="_saveed_jb">
                        <i className="fa fa-heart"></i>
                      </span>
                    </li>
                    <li>
                      <a href="#jobs" className="_applied_jb">
                        Apply Job
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============================ Page Title End ================================== */}

      {/* ============================ Main Section Start ================================== */}
      <section id="jobs">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="_job_detail_box">
                <div className="_job_detail_single">
                  <h4>Job Summary</h4>
                  <p>
                    Choose from the list of our provide styling works to be done
                    according to different company demands. Choose from the list
                    of styling works.
                  </p>
                </div>

                <div className="_job_detail_single">
                  <h4 className="text-capitalize">{slug} styling</h4>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      {/* Single Item */}
                      <div className="_list_jobs_wraps shadow_0 border ">
                        <div className="_list_jobs_f1ex first">
                          <div className="_list_110">
                            <div className="_list_110_thumb">
                              <a href="employer-detail.html">
                                <img
                                  src="https://themezhub.net/workoo-demo/workoo/assets/img/c-1.png"
                                  className="img-fluid"
                                  alt="c-1"
                                />
                              </a>
                            </div>
                            <div className="_list_110_caption">
                              <h4 className="_jb_title">
                                <a href="#upload-work" data-toggle="modal">
                                  Schools Can Stand
                                </a>
                              </h4>
                              <div className="_emp_jb">Topic</div>
                            </div>
                          </div>
                        </div>
                        <div className="_list_jobs_f1ex">
                          <div className="_list_110_caption">
                            <h4 className="_jb_title">Liverpool, UK</h4>
                            <div className="_emp_jb">Location</div>
                          </div>
                        </div>
                        <div className="_list_jobs_f1ex">
                          <div className="_list_110_caption">
                            <h4 className="_jb_title">$15 - $15</h4>
                            <div className="_emp_jb">Payment</div>
                          </div>
                        </div>
                        <div className="_list_jobs_f1ex">
                          <a
                            href="#upload-work"
                            data-toggle="modal"
                            className="_jb_apply"
                          >
                            Choose Job
                          </a>
                        </div>
                      </div>

                      {/* Single Item */}
                      <div className="_list_jobs_wraps shadow_0 border ">
                        <img
                          src="https://themezhub.net/workoo-demo/workoo/assets/img/job-featured.png"
                          className="_featured_jbs"
                          alt="featurejob"
                        />
                        <div className="_list_jobs_f1ex first">
                          <div className="_list_110">
                            <div className="_list_110_thumb">
                              <a href="employer-detail.html">
                                <img
                                  src="https://themezhub.net/workoo-demo/workoo/assets/img/c-2.png"
                                  className="img-fluid"
                                  alt="c-2"
                                />
                              </a>
                            </div>
                            <div className="_list_110_caption">
                              <h4 className="_jb_title">
                                <a href="#upload-work" data-toggle="modal">
                                  No student No School
                                </a>
                              </h4>
                              <div className="_emp_jb">Topic</div>
                            </div>
                          </div>
                        </div>
                        <div className="_list_jobs_f1ex">
                          <div className="_list_110_caption">
                            <h4 className="_jb_title">Canada, USA</h4>
                            <div className="_emp_jb">Location</div>
                          </div>
                        </div>
                        <div className="_list_jobs_f1ex">
                          <div className="_list_110_caption">
                            <h4 className="_jb_title">$15 - $15</h4>
                            <div className="_emp_jb">Payment</div>
                          </div>
                        </div>
                        <div className="_list_jobs_f1ex">
                          <a
                            href="#upload-work"
                            data-toggle="modal"
                            className="_jb_apply"
                          >
                            Choose Job
                          </a>
                        </div>
                      </div>

                      {/* Single Item */}
                      <div className="_list_jobs_wraps shadow_0 border ">
                        <div className="_list_jobs_f1ex first">
                          <div className="_list_110">
                            <div className="_list_110_thumb">
                              <a href="#upload-word" data-toggle="modal">
                                <Icons.CurrencyDollar size="40px" />
                              </a>
                            </div>
                            <div className="_list_110_caption">
                              <h4 className="_jb_title">
                                <a href="#upload-work" data-toggle="modal">
                                  School And Technology
                                </a>
                              </h4>
                              <div className="_emp_jb">Topic</div>
                            </div>
                          </div>
                        </div>
                        <div className="_list_jobs_f1ex">
                          <div className="_list_110_caption">
                            <h4 className="_jb_title">Liseo, Canada</h4>
                            <div className="_emp_jb">Location</div>
                          </div>
                        </div>
                        <div className="_list_jobs_f1ex">
                          <div className="_list_110_caption">
                            <h4 className="_jb_title">$15 - $15</h4>
                            <div className="_emp_jb">Payment</div>
                          </div>
                        </div>
                        <div className="_list_jobs_f1ex">
                          <a
                            href="#upload-work"
                            data-toggle="modal"
                            className="_jb_apply"
                          >
                            Choose Job
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="_jb_summary">
                <div className="_jb_summary_thumb">
                  <img
                    src="https://themezhub.net/workoo-demo/workoo/assets/img/c-7.png"
                    className="img-fluid"
                    alt="c-7"
                  />
                </div>
                <div className="_jb_summary_caption">
                  <h4>InVision App Limited</h4>
                  <span>Since July 2017</span>
                </div>
                <div className="_jb_summary_body">
                  <ul>
                    <li>
                      Company Industry:<span>Consultancy, digital, Tech,</span>
                    </li>
                    <li>
                      Email:<span>invision@gmail.com</span>
                    </li>
                    <li>
                      Phone<span>+91 120 542 8596</span>
                    </li>
                    <li>
                      Location<span>Canada, USA and others</span>
                    </li>

                    <li>
                      <Form onSubmit={handleUserMessage}>
                        <Form.Group>
                          <textarea
                            className="w-100 ht-10 border border form-control"
                            placeholder="Contact Company"
                            onChange={(e) => setUserMessage(e.target.value)}
                            style={{ backgroundColor: '#eee' }}
                            required
                            value={userMessage}
                          ></textarea>
                        </Form.Group>
                      </Form>
                    </li>
                  </ul>
                  <div className="_view_profile_btns">
                    <button className="btn btn_emplo_eloi btn-block bg-primary">
                      Contact Company
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ Main Section End ================================== */}

      <Footer />

      <div
        className="modal fade"
        id="upload-work"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="workupload"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered login-pop-form"
          role="document"
        >
          <div className="modal-content" id="workupload">
            <h3 className="text-center mt-3">
              Write or upload an article of about 300 words and receive your
              payment.
            </h3>
            <div className="dropdown-divider"></div>
            <div className="modal-header">
              <h4>Do the job here or upload the prove</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="ti-close"></i>
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="login-form">
                <form onSubmit={handleUserWork}>
                  <div className="form-group">
                    <label className="active" htmlFor="job">
                      Paste or type your job
                    </label>
                    <textarea
                      className="form-control ht-150"
                      placeholder="Copy & Paste job"
                      id="job"
                      value={userWork.message}
                      onChange={(e) =>
                        setUserWork({
                          ...userWork,
                          message: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label className="light">doc, docx,pdf,txt,png</label>
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="uploadResume"
                        value={userWork.file}
                        onChange={(e) =>
                          setUserWork({ ...userWork, file: e.target.files[0] })
                        }
                      />
                      <label
                        className="custom-file-label"
                        htmlFor="uploadResume"
                      >
                        <i className="ti-link mr-1"></i>Upload Job
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn dark-2 btn-md full-width pop-login"
                    >
                      Submit Job
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StylistJobDetails
