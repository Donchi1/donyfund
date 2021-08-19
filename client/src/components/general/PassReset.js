import React, { useEffect, useState } from 'react'
import { Alert, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { ALERT, NORMAL } from '../State/actionCreator'
import { passwordUpdateAction } from '../State/actions'
import jwt from 'jsonwebtoken'

const PassReset = () => {
  const { token } = useParams()
  const [password, setPassword] = useState({
    newPassword: '',
    repeatPassword: '',
    token: '',
  })
  const dispatch = useDispatch()
  const userAuthState = useSelector((state) => state.authReducer)

  const [errorData, setErrorData] = useState({
    error: false,
    message: '',
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: NORMAL })

    passwordUpdateAction(password)

    setPassword({ ...password, newPassword: '', repeatPassword: '' })
  }

  useEffect(() => {
    jwt.verify(token, process.env.REACT_APP_JWT_RESET, (error, decoded) => {
      if (error || !decoded) {
        setErrorData({
          ...errorData,
          error: true,
          message: 'Invalid or expired token please register',
        })
        return window.location.assign('/passwordreset')
      }

      setPassword({
        ...password,
        token,
      })
    })
  }, [])

  const {
    loading,
    shouldBtnShow,
    errorMessage,
    successMessage,
    successAlert,
    errorAlert,
  } = userAuthState

  return (
    <>
      <div className="page-title inner-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2 className="ipt-title">Password Reset</h2>
              <span className="ipn-subtitle">Password Reset Page</span>
            </div>
          </div>
        </div>
        <div className="ht-70"></div>
      </div>
      <div
        id="login"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="registermodal"
        aria-hidden="true"
      >
        <div className="w-25 mx-auto mt-3 alert-media ">
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
          <Alert
            as="h4"
            dismissible
            variant="danger"
            show={errorData.error}
            onClose={() => setErrorData({ ...errorData, error: false })}
          >
            {errorData.message}
          </Alert>
        </div>
        <div
          className="modal-dialog modal-dialog-centered login-pop-form"
          role="document"
        >
          <div className="modal-content" id="registermodal">
            <div className="mt-3 text-center">
              <h2 className="text-primary">Enter Your New Password</h2>
            </div>
            <div className="modal-body">
              <div className="login-form">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="active" htmlFor="pwd">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="New Password"
                      required
                      id="pwd"
                      value={password.newPassword}
                      onChange={(e) =>
                        setPassword({
                          ...password,
                          newPassword: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label className="active" htmlFor="rpwd">
                      Repeat Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Repeat Password"
                      id="rpwd"
                      required
                      value={password.repeatPassword}
                      onChange={(e) =>
                        setPassword({
                          ...password,
                          repeatPassword: e.target.value,
                        })
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
                        'Submit'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PassReset
