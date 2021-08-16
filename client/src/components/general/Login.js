import React, { useState } from 'react'
import { Alert, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { NORMAL, ALERT } from '../State/actionCreator'
import { loginAction } from '../State/actions'
import GoogleLoginBtn from './GoogleLoginBtn'

function Login() {
  const dispatch = useDispatch()
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  const {
    errorMessage,
    successMessage,
    shouldBtnShow,
    loading,
    successAlert,
    errorAlert,
  } = useSelector((state) => state.authReducer)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: NORMAL })
    loginAction(userData)

    setUserData({ ...userData, email: '', password: '' })
  }

  return (
    <div
      id="login"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="registermodal"
      aria-hidden="true"
    >
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
      <div
        className="modal-dialog modal-dialog-centered login-pop-form"
        role="document"
      >
        <div className="modal-content" id="registermodal">
          <div className="mt-3 text-center">
            <h2 className="text-primary">Sign In</h2>
          </div>
          <div className="modal-body">
            <div className="login-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="active" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={userData.email}
                    required
                    id="email"
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label className="active" htmlFor="pwd">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    required
                    placeholder="*******"
                    value={userData.password}
                    id="pwd"
                    onChange={(e) =>
                      setUserData({ ...userData, password: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    className="btn dark-2 btn-md full-width pop-login"
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
                        <span className="visually-hidden ">Loading...</span>
                      </>
                    ) : (
                      <>
                        <i className="ti-user d-inline-block mr-2"></i> Login
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            <div className="form-group text-center">
              <span>Or Sign In with</span>
            </div>

            <div className="social_logs mb-4">
              <GoogleLoginBtn />
            </div>
          </div>
          <div className="modal-footer">
            <div className="mf-link">
              <i className="ti-user"></i>Haven't An Account?
              <a href="/register" className="theme-cl">
                {' '}
                Sign Up
              </a>
            </div>
            <div className="mf-forget">
              <a href="/user/passwordreset">
                <i className="ti-help"></i>Forget Password
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
