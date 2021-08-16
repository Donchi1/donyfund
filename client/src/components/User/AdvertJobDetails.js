import React, { useEffect, useState } from 'react'
import { Alert, Form, Spinner, Toast } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Footer from '../general/Footer'
import * as Icons from 'react-bootstrap-icons'
import { useSelector, useDispatch } from 'react-redux'
import {
  WORKLIST_ERROR,
  WORKLIST_SUCCESS,
  WORK_NORMAL,
  WORK_NORMAL_AlERT,
} from '../State/actionCreator'
import { advertWorkAction } from '../State/actions'
import axios from 'axios'

function AdvertJobDetails() {
  const { slug } = useParams()

  const workData = useSelector((state) => state.workReducer)
  const dispatch = useDispatch()

  const [userMessage, setUserMessage] = useState('')

  const handleUserMessage = (e) => {
    e.preventDefault()

    setUserMessage('')
  }

  const [idx, setIdx] = useState('')

  const advert = idx !== '' && workData.find((advert) => advert._id === idx)

  const handleAdvert = () => {
    dispatch({
      type: WORK_NORMAL,
    })

    advertWorkAction(advert)
    //redux action
  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_REQUEST_URL}/work/worklist/${slug}`)
      .then((res) => {
        const data = res.data
        dispatch({ type: WORKLIST_SUCCESS, data })
      })
      .catch((error) => {
        dispatch({ type: WORKLIST_ERROR, message: error.response.data.message })
      })
  }, [])

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
                      All {slug} Advert Jobs.
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
                          <i className="ti-credit-card"></i>$10
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
            <Alert variant="danger" show={workData.worklistError}>
              <Alert.Heading>Error</Alert.Heading>
              <p className="text-danger">{workData.worklistErrorMessage}</p>
            </Alert>

            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="_job_detail_box">
                <div className="_job_detail_single">
                  <h4>Job Summary</h4>
                  <p>
                    Choose from the list of our provide advert job to be done
                    according to different company demands. Choose from the list
                    of Advert.
                  </p>
                </div>

                <div className="_job_detail_single ">
                  <h4 className="text-capitalize">List of {slug} Jobs</h4>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      {workData &&
                        workData.map((each) => (
                          <div
                            className="_list_jobs_wraps shadow_0 border "
                            key={each.id}
                            onClick={() => setIdx(each._id)}
                          >
                            <div className="_list_jobs_f1ex first">
                              <div className="_list_110">
                                <div className="_list_110_thumb ">
                                  <a href="#upload-work" data-toggle="modal">
                                    <img src={each.imgUrl} alt={each.name} />
                                  </a>
                                </div>
                                <span
                                  className=" d-inline-block, mb-2"
                                  style={{ width: '2rem' }}
                                ></span>
                                <div className="_list_110_caption">
                                  <h4 className="_jb_title">
                                    <a href="#upload-work" data-toggle="modal">
                                      {each.name}
                                    </a>
                                  </h4>
                                  <div className="_emp_jb">Name</div>
                                </div>
                              </div>
                            </div>
                            <div className="_list_jobs_f1ex">
                              <div className="_list_110_caption">
                                <h4 className="_jb_title">{each.location}</h4>
                                <div className="_emp_jb">Location</div>
                              </div>
                            </div>
                            <div className="_list_jobs_f1ex">
                              <div className="_list_110_caption">
                                <h4 className="_jb_title">
                                  {each.price} - $15
                                </h4>
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
                        ))}

                      {/* Single Item */}
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
                      Company Industry:
                      <span>Consultancy, digital, Tech,</span>
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
                            className="w-100 ht-10 border border form-control with-light"
                            placeholder="Contact Company"
                            onChange={(e) => setUserMessage(e.target.value)}
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
        className="modal fade "
        id="upload-work"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="workupload"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg login-pop-form w-100"
          role="document"
        >
          <div className="modal-content " id="workupload">
            <div
              aria-live="polite"
              aria-atomic="true"
              className="position-relative "
            >
              <div
                className="position-absolute toast-m"
                style={{ right: '30%' }}
              >
                <Toast
                  as="h3"
                  style={{ backgroundColor: 'lightgreen', color: 'black' }}
                  autohide
                  show={workData.successAlert}
                  className="mt-3 "
                  onClose={() =>
                    dispatch({
                      type: WORK_NORMAL_AlERT,
                    })
                  }
                >
                  <Toast.Body>{workData.successMessage}</Toast.Body>
                </Toast>
                <Toast
                  as="h3"
                  className="mt-3"
                  autohide
                  style={{ backgroundColor: 'red', color: 'white' }}
                  show={workData.errorAlert}
                  onClose={() =>
                    dispatch({
                      type: WORK_NORMAL_AlERT,
                    })
                  }
                >
                  <Toast.Body>{workData.errorMessage}</Toast.Body>
                </Toast>
              </div>
            </div>
            <h3 className="text-center mt-3">
              Click on the advert button to make your profit.
            </h3>
            <div className="dropdown-divider"></div>
            <div className="modal-header">
              <h4>
                <span> Price: {advert.price}</span>
                <br />
                <span> Name: {advert.name}</span>
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
                <div>
                  <div className="w-100">
                    <img src={advert.imgUrl} alt={advert.name} />
                  </div>
                  <p>{advert.description}</p>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn dark-2 btn-md full-width pop-login "
                    onClick={handleAdvert}
                    disabled={workData.shouldBtnShow}
                  >
                    {workData.loading ? (
                      <>
                        <Spinner
                          animation="border"
                          role="status"
                          aria-hidden="true"
                          as="span"
                          variant="success"
                          className="mr-2 d-inline-block"
                        />
                        <span className="visually-hidden ">Loading...</span>
                      </>
                    ) : (
                      <>
                        <Icons.CurrencyDollar
                          size="25px"
                          className="mr-2 text-success"
                        />
                        Advertize this product
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvertJobDetails
