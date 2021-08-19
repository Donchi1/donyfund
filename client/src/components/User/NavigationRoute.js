import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { logoutAction } from '../State/actions'

function NavigationRoute() {
  const { pathname } = useLocation()

  const { userData } = useSelector((state) => state.authReducer)
  return (
    <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12">
      <div className="dashboard-navbar overlio-top">
        <div className="d-user-avater">
          {userData.profilePic.picPath ? (
            <img
              src={userData.profilePic.picPath}
              className="img-fluid rounded"
              alt="team-1"
            />
          ) : (
            <div className="avater_uploads custom-file w-100 ">
              <label className="custom-file-label d-inline-block w-100 pt-3  ">
                <i className="fa fa-user"></i>
              </label>
            </div>
          )}
          <h4>{userData.fullname}</h4>
          <span>{userData.country}</span>
        </div>

        <div className="d-navigation">
          <ul id="metismenu" className="metismenu">
            <li className={pathname === '/user/dashboard' ? 'active' : ''}>
              <a href="/user/dashboard">
                <i className="ti-dashboard"></i>Dashboard
              </a>
            </li>
            <li className={pathname === '/user/profile' ? 'active' : ''}>
              <a href="/user/profile">
                <i className="ti-user"></i>My Profile
              </a>
            </li>
            <li className={pathname === '/user/notification' ? 'active' : ''}>
              <a href="/user/notification">
                <i className="ti-email"></i>Notification
              </a>
            </li>
            <li className={pathname === '/user/joblist' ? 'active' : ''}>
              <a href="/user/joblist">
                <i className="fa fa-briefcase"></i>Jobs
              </a>
            </li>
            <li
              className={pathname === '/user/workinformation' ? 'active' : ''}
            >
              <a href="/user/workinformation">
                <i className="fa fa-book"></i>information
              </a>
            </li>
            <li className={pathname === '/user/withdrawal' ? 'active' : ''}>
              <a href="/user/withdrawal">
                <i className="fa fa-dollar"></i>Withdrawal
              </a>
            </li>

            <li>
              <Link to="#" onClick={() => logoutAction()}>
                <i className="ti-power-off"></i>Log Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavigationRoute
