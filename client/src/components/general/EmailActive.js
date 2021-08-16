import React, { useEffect, useState } from 'react'
import { Alert, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as Icons from 'react-bootstrap-icons'
import { NORMAL, ALERT } from '../State/actionCreator'
import { emailActivateAction } from '../State/actions'
import jwt from 'jsonwebtoken'

function EmailActive() {
  const dispatch = useDispatch()

  const { token } = useParams()

  const [tokenData, setTokenData] = useState({
    name: '',
    token: '',
    error: false,
    message: '',
  })

  useEffect(() => {
    jwt.verify(token, process.env.REACT_APP_JWT_SECRET, (error, decoded) => {
      if (error || !decoded) {
        setTokenData({
          ...tokenData,
          name: '',
          token: '',
          error: true,
          message: 'Invalid or expired token please register',
        })
        return window.location.assign('/register')
      }

      setTokenData({
        ...tokenData,
        name: decoded.fullname,
        token,
      })
    })
  }, [])
  const {
    errorMessage,
    successMessage,
    shouldBtnShow,
    loading,
    successAlert,
    errorAlert,
  } = useSelector((state) => state.authReducer)

  const handleSubmit = (e) => {
    dispatch({ type: NORMAL })
    emailActivateAction(tokenData)
  }

  return (
    <>
      <div className="page-title inner-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2 className="ipt-title">Activate </h2>
              <span className="ipn-subtitle">Account Activation</span>
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
        <div className="w-25 mx-auto mt-2 alert-media">
          <Alert
            as="h4"
            dismissible
            variant="danger"
            show={tokenData.error}
            onClose={() => setTokenData({ ...tokenData, error: false })}
          >
            {tokenData.message}
          </Alert>
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
          className="modal-dialog modal-dialog-centered login-pop-form "
          role="document"
        >
          <div className="modal-content" id="registermodal">
            <div className="mt-3 text-center">
              <h6 className="text-primary">
                Welcome {tokenData.name} please Activate Your Account
              </h6>
            </div>
            <div className="modal-body">
              <div className="login-form">
                <div className="form-group">
                  <button
                    onClick={handleSubmit}
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
                        <span className="visually-hidden ">Activating...</span>
                      </>
                    ) : (
                      <>
                        <Icons.UnlockFill size="20px" className="mr-2" />{' '}
                        Activate Account
                      </>
                    )}
                  </button>
                  <div className="form-group mt-3">
                    <a
                      href="/register"
                      className="btn dark-2 btn-md full-width pop-login"
                    >
                      <Icons.PersonPlus size="20px" className="mr-2" />
                      Register
                    </a>
                  </div>
                  <div className="form-group">
                    <a
                      href="/login"
                      className="btn dark-2 btn-md full-width pop-login"
                    >
                      <i className="ti-user d-inline-block mr-2"></i> Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmailActive
