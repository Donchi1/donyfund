import React, { useState } from 'react'
import { Alert, Spinner } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { ALERT, NORMAL } from '../State/actionCreator'
import { contactAction } from '../State/actions'
import Footer from './Footer'
import Header from './Header'

function Contacts() {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    phone: '',
    file: '',
  })

  const dispatch = useDispatch()

  const {
    errorMessage,
    successMessage,
    shouldBtnShow,
    loading,
    successAlert,
    errorAlert,
  } = useSelector((state) => state.authReducer)

  const handleContact = (e) => {
    e.preventDefault()
    dispatch({ type: NORMAL })
    contactAction(contactData)

    setContactData({
      ...setContactData,
      name: '',
      email: '',
      company: '',
      message: '',
      phone: '',
      file: '',
    })
  }

  return (
    <div id="main-wrapper">
      <Header headerStyle={'header header-light'} />

      <div className="clearfix"></div>

      {/* ============================ Page Title Start================================== */}
      <div className="page-title inner-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2 className="ipt-title">Contact Us</h2>
              <span className="ipn-subtitle">
                Looking For a work place? You Found One.
              </span>
            </div>
          </div>
        </div>
        <div className="ht-80"></div>
      </div>
      {/* ============================ Page Title End ================================== */}

      {/* ============================ Main Section Start ================================== */}
      <section className="pt-0">
        <div className="container overlio-top">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="contact_side overlio-top">
                <div className="ct_cmp_social">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fa fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-google-plus"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="ct_cmp_caption">
                  <h4 className="mb-0">Get in Touch.</h4>
                  <p>Get in touch via mail, call and direct address.</p>
                </div>

                <div className="ct_cmp_address">
                  <div className="ct_cmp_single">
                    <div className="ct_cmp_single_icon">
                      <i className="ti-location-pin"></i>
                    </div>
                    <div className="ct_cmp_brief">
                      <h5>Reach Us:</h5>
                      <span>
                        24 Brooklyn queen NewYork
                        <br />
                        United States
                      </span>
                    </div>
                  </div>
                  <div className="ct_cmp_single">
                    <div className="ct_cmp_single_icon">
                      <i className="fa fa-envelope"></i>
                    </div>
                    <div className="ct_cmp_brief">
                      <h5>Drop a mail:</h5>
                      <a href="mailto:support@donyfund.info">
                        support@donyfund.info
                      </a>
                    </div>
                  </div>
                  <div className="ct_cmp_single">
                    <div className="ct_cmp_single_icon">
                      <i className="fa fa-phone"></i>
                    </div>
                    <div className="ct_cmp_brief">
                      <h5>Whatsapp:</h5>
                      <span>+1 625 258 4759</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Item Wrap Start */}
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="w-25 m-auto alert-media">
                <Alert
                  as="h4"
                  variant="success"
                  show={successAlert}
                  dismissible
                  onClose={() => dispatch({ type: ALERT })}
                >
                  {successMessage}
                </Alert>
                <Alert
                  as="h4"
                  dismissible
                  variant="danger"
                  show={errorAlert}
                  onClose={() => dispatch({ type: ALERT })}
                >
                  {errorMessage}
                </Alert>
              </div>
              <form className="contact_row" onSubmit={handleContact}>
                <div className="form_row_box">
                  <div className="form_row_header">
                    <div className="form_row_header_flex">
                      <img
                        src="https://themezhub.net/workoo-demo/workoo/assets/img/email.svg"
                        className="img-fluid"
                        width="52"
                        alt="email"
                      />
                    </div>
                    <div className="form_row_header_right">
                      <p>
                        Write as in few words about what you want and we'll
                        prepare your answer within <strong>24</strong> hours and
                        inform you shortly.
                      </p>
                    </div>
                  </div>
                  <div className="form_row_box_body">
                    <div className="form-row">
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                          <label className="active" htmlFor="name">
                            Your Name
                          </label>
                          <input
                            type="text"
                            className="form-control with-light"
                            placeholder="Your Name"
                            id="name"
                            required
                            value={contactData.name}
                            onChange={(e) =>
                              setContactData({
                                ...contactData,
                                name: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                          <label className="active" htmlFor="email">
                            Your e-Mail
                          </label>
                          <input
                            type="email"
                            className="form-control with-light"
                            placeholder="updicl@gmail.com"
                            id="email"
                            value={contactData.email}
                            required
                            onChange={(e) =>
                              setContactData({
                                ...contactData,
                                email: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                          <label className="active" htmlFor="company">
                            Company
                          </label>
                          <input
                            type="text"
                            className="form-control with-light"
                            placeholder="ThemezHub Ltd."
                            id="company"
                            value={contactData.company}
                            onChange={(e) =>
                              setContactData({
                                ...contactData,
                                company: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                          <label className="active" htmlFor="phone">
                            Phone No.
                          </label>
                          <input
                            type="text"
                            className="form-control with-light"
                            placeholder="+91 256 584 7863"
                            id="phone"
                            required
                            value={contactData.phone}
                            onChange={(e) =>
                              setContactData({
                                ...contactData,
                                phone: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label className="active" htmlFor="msg">
                            Your Query
                          </label>
                          <textarea
                            id="msg"
                            className="form-control with-light"
                            required
                            value={contactData.message}
                            onChange={(e) =>
                              setContactData({
                                ...contactData,
                                message: e.target.value,
                              })
                            }
                          >
                            About Your Query
                          </textarea>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <div className="custom-file">
                            <input
                              type="file"
                              className="custom-file-input"
                              id="upfile"
                              onChange={(e) => {
                                const file = e.target.files[0]
                                setContactData({ ...contactData, file: file })
                              }}
                            />
                            <label
                              className="custom-file-label"
                              htmlFor="upfile"
                            >
                              Upload file
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <button
                            type="submit"
                            className="btn dark-3"
                            disabled={shouldBtnShow}
                          >
                            {loading ? (
                              <>
                                <Spinner
                                  animation="border"
                                  role="status"
                                  aria-hidden="true"
                                  as="span"
                                  variant="success"
                                  className="mr-2 d-inline-block"
                                />
                                <span className="visually-hidden ">
                                  Loading...
                                </span>
                              </>
                            ) : (
                              <>Submit</>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* ============================ Main Section End ================================== */}

      {/* ============================ Call To Action Start ================================== */}

      <Footer />
    </div>
  )
}

export default Contacts
