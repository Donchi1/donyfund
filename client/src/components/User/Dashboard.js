import axios from 'axios'
import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from '../general/Footer'
import {
  NOTIFICATION_FETCH_SUCCESS,
  UPDATE_PROFILE_SUCCESS_DEFAULT,
  WORK_SUCCESS_DEFAULT,
} from '../State/actionCreator'
import Invoice from './Invoice'
import * as Icons from 'react-bootstrap-icons'

import NavigationRoute from './NavigationRoute'

function Dashboard() {
  const dispatch = useDispatch()

  const notificationData = useSelector(
    (state) => state.notificationReducer.notificationData,
  )
  const workData = useSelector((state) => state.workReducer.workData)
  const userData = useSelector((state) => state.authReducer.userData)

  useEffect(() => {
    const workRequest = axios.get(
      `${process.env.REACT_APP_API_REQUEST_URL}/works/info`,
    )
    const notificationRequest = axios.get(
      `${process.env.REACT_APP_API_REQUEST_URL}/notification/info`,
    )
    const userRequest = axios.get(
      `${process.env.REACT_APP_API_REQUEST_URL}/user/info`,
    )

    axios
      .all([workRequest, notificationRequest, userRequest])
      .then(
        axios.spread((...responses) => {
          const workResponse = responses[0]
          const notificationResponse = responses[1]
          const userResponse = responses[2]

          dispatch({
            type: UPDATE_PROFILE_SUCCESS_DEFAULT,
            data: userResponse.data,
          })
          dispatch({ type: WORK_SUCCESS_DEFAULT, payload: workResponse.data })
          dispatch({
            type: NOTIFICATION_FETCH_SUCCESS,
            payload: notificationResponse.data,
          })
        }),
      )
      .catch((errors) => {
        const [work, note, user] = errors.response.data
        console.log(work, note, user)
      })
  })
  return (
    <div id="main-wrapper">
      <div className="clearfix"></div>
      {/* ============================================================== */}
      {/* Top header  */}
      {/* ============================================================== */}

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
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Dashboard
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                  <div className="dashboard-stat">
                    <div className="dashboard-stat-icon widget-1 bg-success">
                      <Icons.CurrencyDollar />
                    </div>
                    <div className="dashboard-stat-content">
                      <h4>
                        $
                        <span className="cto">
                          {workData.totalWorkPrice
                            ? workData.totalWorkPrice
                            : '000'}
                        </span>
                      </h4>{' '}
                      <p>Total Earned</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                  <div className="dashboard-stat">
                    <div className="dashboard-stat-icon widget-2">
                      <i className="ti-pie-chart"></i>
                    </div>
                    <div className="dashboard-stat-content">
                      <h4>
                        <span className="cto">
                          {workData.successJobs ? workData.successJobs : '000'}
                        </span>
                      </h4>{' '}
                      <p>Success Jobs</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                  <div className="dashboard-stat">
                    <div className="dashboard-stat-icon widget-3 bg-success ">
                      <Icons.Check />
                    </div>
                    <div className="dashboard-stat-content">
                      <h4>
                        <span className="cto">
                          {workData.totalWorks ? workData.totalWorks : '000'}
                        </span>
                      </h4>{' '}
                      <p>Success Jobs</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                  <div className="dashboard-stat">
                    <div className="dashboard-stat-icon widget-4">
                      <i className="ti-bookmark"></i>
                    </div>
                    <div className="dashboard-stat-content">
                      <h4>
                        <span className="cto">
                          {workData.failedJobs ? workData.failedJobs : '000'}
                        </span>
                      </h4>{' '}
                      <p>Failed Jobs</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="dashboard-gravity-list with-icons">
                    <h4>Recent Activities</h4>
                    <ul>
                      {notificationData &&
                        notificationData.map((each) => (
                          <li key={each.id}>
                            <i
                              className={`dash-icon-box ti-layers text-${each.status} bg-${each.status}`}
                            ></i>{' '}
                            <strong>{each.creatorname}</strong> <br />
                            <span>{each.message}</span>
                            {each.createdAt}
                            <Link to="#" className="close-list-item"></Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
                <Invoice />
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

export default Dashboard
