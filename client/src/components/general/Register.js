import React, { useState } from 'react'
import { Alert, Col, Form, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { NORMAL, ALERT } from '../State/actionCreator'

import { registerAction } from '../State/actions'
import CountryDropdown from './CountryDropdown'

function Register() {
  const dispatch = useDispatch()

  const {
    errorMessage,
    successMessage,
    shouldBtnShow,
    loading,
    successAlert,
    errorAlert,
  } = useSelector((state) => state.authReducer)

  const [userData, setUserData] = useState({
    username: '',
    fullname: '',
    email: '',
    occupation: '',
    password: '',
    gender: '',
    country: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: NORMAL })

    registerAction(userData)

    setUserData({
      ...userData,
      username: '',
      fullname: '',
      email: '',
      occupation: '',
      password: '',
      gender: '',
      country: '',
    })
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
            <h2 className=" text-primary">Register</h2>
          </div>
          <div className="modal-body">
            <div className="login-form">
              <form onSubmit={handleSubmit}>
                <Form.Row>
                  <Col>
                    <div className="form-group">
                      <label className="active" htmlFor="username">
                        User Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        id="username"
                        value={userData.username}
                        onChange={(e) =>
                          setUserData({ ...userData, username: e.target.value })
                        }
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className="form-group">
                      <label className="active" htmlFor="fullname">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Fullname"
                        id="fullname"
                        value={userData.fullname}
                        onChange={(e) =>
                          setUserData({ ...userData, fullname: e.target.value })
                        }
                      />
                    </div>
                  </Col>
                </Form.Row>
                <div className="form-group">
                  <label className="active" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    id="email"
                    required
                    value={userData.email}
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label className="active" htmlFor="country">
                    Country
                  </label>
                  <CountryDropdown state={userData} setState={setUserData} />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <input
                      id="female"
                      className="checkbox-custom"
                      type="radio"
                      autoComplete="true"
                      checked={userData.gender === 'female'}
                      onChange={(e) =>
                        setUserData({ ...userData, gender: 'female' })
                      }
                    />
                    <label htmlFor="female" className="checkbox-custom-label">
                      female
                    </label>
                  </div>
                  <div className="form-group">
                    <input
                      id="male"
                      className="checkbox-custom"
                      autoComplete="true"
                      type="radio"
                      checked={userData.gender === 'male'}
                      onChange={() =>
                        setUserData({ ...userData, gender: 'male' })
                      }
                    />
                    <label htmlFor="male" className="checkbox-custom-label">
                      Male
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <label className="active" htmlFor="job">
                    Occupation
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Current Job"
                    id="job"
                    value={userData.occupation}
                    required
                    onChange={(e) =>
                      setUserData({ ...userData, occupation: e.target.value })
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
                    placeholder="*******"
                    id="pwd"
                    autoComplete="true"
                    value={userData.password}
                    security="true"
                    required
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
                        <i className="ti-user"></i> Sign Up
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="ml-2 mb-4 text-center">
            <div className="mf-link">
              <i className="ti-user"></i>Already have An Account?
              <a href="/login" className="theme-cl">
                {' '}
                Log In
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
