import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../general/Footer'
import { useDispatch, useSelector } from 'react-redux'
import NavigationRoute from './NavigationRoute'
import axios from 'axios'
import {
  NOTIFICATION_ALERT,
  WORK_NOTIFICATION_FETCH_ERROR,
  WORK_NOTIFICATION_FETCH_SUCCESS,
} from '../State/actionCreator'
import { Alert } from 'react-bootstrap'
import { workNotificationDeleteAction } from '../State/actions'

const WorkNotification = () => {
  const dispatch = useDispatch()

  const { workNotificationData, errorMessage, errorAlert } = useSelector(
    (state) => state.notificationReducer,
  )

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_REQUEST_URL}/get/info`)
      .then((res) => {
        const data = res.data.notes
        dispatch({ type: WORK_NOTIFICATION_FETCH_SUCCESS, payload: data })
      })
      .catch((err) => {
        dispatch({
          type: WORK_NOTIFICATION_FETCH_ERROR,
          message: err.response.data.message,
        })
      })
  }, [])

  return (
    <div id="main-wrapper">
      <div className="clearfix"></div>

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
                          Information
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="w-25 m-auto alert-media">
                  <Alert
                    as="h4"
                    dismissible
                    variant="danger"
                    show={errorAlert}
                    onClose={() => dispatch({ type: NOTIFICATION_ALERT })}
                  >
                    {errorMessage}
                  </Alert>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="dashboard-gravity-list with-icons">
                    <h4>Article Work Informations</h4>
                    {workNotificationData.articleNotes &&
                      workNotificationData.articleNotes.map((each) => (
                        <ul>
                          <li>
                            <i className="dash-icon-box ti-star text-success bg-light-success"></i>{' '}
                            <span>{each.creatorname}</span> <br />
                            {each.message}
                            <div
                              className="numerical-rating high"
                              data-rating="5.0"
                            ></div>{' '}
                            <strong>
                              {each.category} {each.createdAt}
                            </strong>
                            <Link
                              to="#"
                              className="close-list-item"
                              onClick={() =>
                                workNotificationDeleteAction(each._id)
                              }
                            >
                              <i className="fa fa-close"></i>
                            </Link>
                          </li>
                        </ul>
                      ))}
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="dashboard-gravity-list with-icons">
                    <h4>Advert Work Informations</h4>
                    {workNotificationData.advertNotes &&
                      workNotificationData.advertNotes.map((each) => (
                        <ul>
                          <li>
                            <i className="dash-icon-box ti-star text-success bg-light-success"></i>{' '}
                            <span>{each.creatorname}</span> <br />
                            {each.message}
                            <div
                              className="numerical-rating high"
                              data-rating="5.0"
                            ></div>{' '}
                            <strong>
                              {each.category} {each.createdAt}
                            </strong>
                            <Link
                              to="#"
                              className="close-list-item"
                              onClick={() =>
                                workNotificationDeleteAction(each._id)
                              }
                            >
                              <i className="fa fa-close"></i>
                            </Link>
                          </li>
                        </ul>
                      ))}
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="dashboard-gravity-list with-icons">
                    <h4>Blog Work Informations</h4>
                    {workNotificationData.blogNotes &&
                      workNotificationData.blogNotes.map((each) => (
                        <ul>
                          <li>
                            <i className="dash-icon-box ti-star text-success bg-light-success"></i>{' '}
                            <span>{each.creatorname}</span> <br />
                            {each.message}
                            <div
                              className="numerical-rating high"
                              data-rating="5.0"
                            ></div>{' '}
                            <strong>
                              {each.category} {each.createdAt}
                            </strong>
                            <Link
                              to="#"
                              className="close-list-item"
                              onClick={() =>
                                workNotificationDeleteAction(each._id)
                              }
                            >
                              <i className="fa fa-close"></i>
                            </Link>
                          </li>
                        </ul>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============================ Main Section End ================================== */}
      <Footer />
    </div>
  )
}

export default WorkNotification
