import React, { useState } from 'react'
import { Form, Toast } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Footer from '../general/Footer'
import * as Icons from 'react-bootstrap-icons'
import { blogWorkAction } from '../State/actions'

function BlogJobDetails() {
  const { slug } = useParams()

  const [userWork, setUserWork] = useState({
    file: '',
    work: '',
    topic: slug,
  })

  const [userMessage, setUserMessage] = useState('')

  const handleUserMessage = (e) => {
    e.preventDefault()

    /// redux action

    setUserMessage('')
  }

  const [show, setShow] = useState(false)

  const handleUserWork = (e) => {
    e.preventDefault()
    if (userWork.file === '' && userWork.work === '') return setShow(true)

    blogWorkAction(userWork)

    setUserWork({ ...userWork, file: '', work: '' })
  }
  console.log(new Date().toLocaleDateString())

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
                      {slug} blog Writing Job.
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
                <h3 className="text-capitalize">{slug} Blog Job</h3>
                <div className="_job_detail_single mt-3">
                  <h4>Job Summary</h4>
                  <p>
                    Choose from the list of our provide blog topics to be
                    written according to different company demands. Choose from
                    the list of blog.
                  </p>
                </div>

                <div className="_job_detail_single ">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div>
                        <div className="d-flex justify-content-center align-items-center">
                          <Icons.CurrencyDollar size={'28rem'} />
                        </div>
                        <div className="_list_jobs_f1ex w-100">
                          <button
                            data-target="#upload-work"
                            data-toggle="modal"
                            className=" btn btn-block bg-primary text-light py-3 border-0 text-bold font-3"
                            style={{ width: '100%' }}
                          >
                            Start Job
                          </button>
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
                            className="w-100 ht-10 border border form-control "
                            placeholder="Contact Company"
                            onChange={(e) => setUserMessage(e.target.value)}
                            required
                            style={{ backgroundColor: '#eee' }}
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
          className="modal-dialog modal-dialog-centered login-pop-form modal-lg"
          role="document"
        >
          <div className="modal-content" id="workupload">
            <div className="position-relative">
              <div
                className="position-absolute toast-m"
                style={{ right: '40%' }}
              >
                <Toast
                  as="h3"
                  style={{ backgroundColor: 'red', color: 'white' }}
                  autohide
                  show={show}
                  className="mt-3 "
                  onClose={() => setShow(false)}
                >
                  <Toast.Body>Work can't be empty</Toast.Body>
                </Toast>
              </div>
            </div>
            <h3 className="text-center mt-3">
              Write or upload a full detailed blog and receive your payment.
            </h3>
            <div className="dropdown-divider"></div>
            <div className="modal-header">
              <h4>
                <span className="text-capitalize">Topic: {slug}</span> <br />{' '}
                <span className="text-danger ">
                  Warning: Make sure to add the{' '}
                  <span
                    className="mark text-uppercase"
                    style={{ textDecoration: 'underline' }}
                  >
                    Topic
                  </span>
                  of your blog.
                </span>
              </h4>
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
                      value={userWork.work}
                      onChange={(e) =>
                        setUserWork({
                          ...userWork,
                          work: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label className="light">doc, docx,pdf,txt</label>
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

export default BlogJobDetails
