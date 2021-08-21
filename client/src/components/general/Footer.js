import React, { useState } from 'react'
import { Alert, Spinner } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import { newsLetterAction } from '../State/actions'

function Footer() {
  const [letterInfo, setLetterInfo] = useState({
    errorMessage: '',
    successMessage: '',
    shouldBtnShow: false,
    loading: false,
    successAlert: false,
    errorAlert: false,
  })
  const [letterData, setletterData] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    setLetterInfo({ ...letterInfo, loading: true, shouldBtnShow: true })
    newsLetterAction(letterData, letterInfo, setLetterInfo)
    return setletterData('')
  }

  const {
    errorMessage,
    successMessage,
    shouldBtnShow,
    loading,
    successAlert,
    errorAlert,
  } = letterInfo

  return (
    <>
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
                  Changes in our system, platform and Unlimited web maintenance
                  service.
                </p>
              </div>
              <div className="inner-flexible-box subscribe-box">
                <div className="w-25 m-auto alert-media">
                  <Alert
                    as="h4"
                    variant="success"
                    show={successAlert}
                    dismissible
                    onClose={() =>
                      setLetterInfo({
                        ...letterInfo,
                        errorAlert: false,
                        successAlert: false,
                      })
                    }
                  >
                    {successMessage}
                  </Alert>
                  <Alert
                    as="h4"
                    dismissible
                    variant="danger"
                    show={errorAlert}
                    onClose={() =>
                      setLetterInfo({
                        ...letterInfo,
                        errorAlert: false,
                        successAlert: false,
                      })
                    }
                  >
                    {errorMessage}
                  </Alert>
                </div>
                <form onSubmit={handleSubscribe}>
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control large"
                      placeholder="Enter your mail here"
                      autoComplete="true"
                      required
                      value={letterData}
                      onChange={(e) => setletterData(e.target.value)}
                    />
                    <button
                      className="btn btn-subscribe bg-dark"
                      type="submit"
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
                        </>
                      ) : (
                        <>
                          <i className="fa fa-arrow-right"></i>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="dark-footer skin-dark-footer">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="footer-widget">
                  <img
                    src="/assets/cover.png"
                    className="img-fluid f-logo"
                    width="120"
                    alt="logo"
                  />
                  <p>
                   24 Brooklyn queen NewYork 
                    <br />
                    United States
                  </p>
                  <ul className="footer-bottom-social">
                    <li>
                      <Link to="#">
                        <i className="ti-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ti-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ti-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ti-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
                <div className="footer-widget">
                  <h4 className="widget-title">Useful links</h4>
                  <ul className="footer-menu">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/">privacy policy</a>
                    </li>
                    <li>
                      <a href="/">FAQs Page</a>
                    </li>

                    <li>
                      <a href="/">blogs</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2 col-md-4">
                <div className="footer-widget">
                  <h4 className="widget-title">Useful links</h4>
                  <ul className="footer-menu">
                    <li>
                      <a href="/about">About Us</a>
                    </li>
                    <li>
                      <a href="/login">Login</a>
                    </li>
                    <li>
                      <a href="/register">Register</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 mt-5">
                <h4 className="widget-title">locate Us</h4>
                <iframe
                  src="https://maps.google.com/maps?width=600&amp;height=1284&amp;hl=en&amp;q=24 Brooklyn queen NewYork United States&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  height="150"
                  style={{ border: '0', width: '100%' }}
                  title="Donyfund Location"
                  allowFullScreen=""
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 col-md-12 text-center">
                <p className="mb-0">
                  © {new Date().getFullYear()}
                  <a href="https://donyfund.info"> DonyFund</a> All Rights
                  Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
