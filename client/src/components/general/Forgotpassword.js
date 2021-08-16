import React, { useState } from 'react'
import { Alert, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { ALERT, NORMAL } from '../State/actionCreator'
import { passwordResetAction } from '../State/actions'

function Forgotpassword() {
  const [resetEmail, setResetEmail] = useState('')
  const dispatch = useDispatch()

  const userAuthState = useSelector((state) => state.authReducer)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: NORMAL })

    passwordResetAction(resetEmail)

    setResetEmail('')
  }

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
              <h2 className="ipt-title">Forget Password</h2>
              <span className="ipn-subtitle">Forget password page</span>
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
        <div>
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
          </div>
          <div
            className="modal-dialog modal-dialog-centered login-pop-form"
            role="document"
          >
            <div className="modal-content" id="registermodal">
              <div className=" mt-3 text-center">
                <h2 className="text-primary">Forget Password</h2>
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
                        placeholder="Your Email"
                        id="email"
                        required
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
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
      </div>
    </>
  )
}

export default Forgotpassword
