import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { loginStatus } from '../../App'
import { logoutAction } from '../State/actions'
import * as Icons from 'react-bootstrap-icons'

function Header({ headerStyle }) {
  const { pathname } = useLocation()
  return (
    <div className={headerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <nav id="navigation" className="navigation navigation-portrait">
              <div className="nav-header">
                <a className="nav-brand static-logo" href="/">
                  <img src="/assets/cover.png" className="logo" alt="logo" />
                </a>
                <a className="nav-brand fixed-logo" href="/">
                  <img src="/assets/cover.png" className="logo" alt="logo" />
                </a>

                <div className="nav-toggle"></div>
              </div>
              <div className="nav-menus-wrapper">
                <span className="nav-menus-wrapper-close-button">✕</span>
                <ul className="nav-menu">
                  <li className={pathname === '/' ? 'active' : ''}>
                    <a href="/">Home</a>
                  </li>

                  <li className={pathname === '/about' ? 'active' : ''}>
                    <a href="/about">About</a>
                  </li>

                  <li className={pathname === '/contact' ? 'active' : ''}>
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>

                {!loginStatus ? (
                  <ul className="nav-menu nav-menu-social align-to-right">
                    <li className="add-listing ml-2 ml-0-sm">
                      <a href="/register">
                        <Icons.PersonPlus size="20px" className="mr-1" />{' '}
                        Register
                      </a>
                    </li>
                    <span className="mx-2  " style={{ visibility: 'hidden' }}>
                      gh
                    </span>
                    <li className="add-listing">
                      <a href="/login">
                        <i className="ti-user mr-1"></i> Sign in
                      </a>
                    </li>
                  </ul>
                ) : (
                  <ul className="nav-menu nav-menu-social align-to-right">
                    <li className="add-listing ml-2 ml-0-sm">
                      <a href="/user/dashboard">
                        <i className="ti-arrow-right mr-1"></i> Dashboard
                      </a>
                    </li>
                    <span className="mx-2  " style={{ visibility: 'hidden' }}>
                      gh
                    </span>
                    <li className="add-listing">
                      <Link to="#" onClick={() => logoutAction()}>
                        <Icons.Lock className="mr-1" /> Sign Out
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
