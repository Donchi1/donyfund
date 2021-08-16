import React from 'react'
import { useLocation } from 'react-router'

function Error404() {
  const { pathname } = useLocation()
  return (
    <>
      <div className="page-title inner-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2 className="ipt-title">404 Error</h2>
              <span className="ipn-subtitle">A 404 error occcured.</span>
            </div>
          </div>
        </div>
        <div className="ht-70"></div>
      </div>
      <section
        className=" d-flex justify-content-center align-items-center "
        style={{ height: '70vh' }}
      >
        <div className="row ">
          <div className="col-md-12 ">
            <div className="section-heading text-center">
              <h1
                className="title text-danger"
                style={{ fontSize: '6rem', fontFamily: 'fantasy' }}
              >
                404
              </h1>
              <p className="text-info ">
                Ooops! 404 - Page {pathname} Not Found
              </p>
            </div>
          </div>
          <div
            className="col-md-12 animated"
            data-animation="fadeInUpShorter"
            data-animation-delay="0.3s"
          >
            <div className="section-heading text-center">
              <a href="/" className="btn btn-round bg-primary text-light">
                Back to home
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Error404
