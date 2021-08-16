import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { GoogleLogin } from 'react-google-login'
import { ERROR, SUCCESS } from '../State/actionCreator'

function GoogleLoginBtn() {
  const dispatch = useDispatch()

  const handleLogin = (googleId) => {
    axios
      .post(`${process.env.REACT_APP_REQUEST_URL}/googleLogin`, googleId)
      .then((res) => {
        res.data().then((res) => {
          const userCred = res.data
          dispatch({ type: SUCCESS, data: userCred })
          window.location.assign('/user/dashboard')
        })
      })
      .catch((err) => {
        const { message } = err.response.data
        dispatch({ type: ERROR, message })
      })
  }

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT}
      onSuccess={(e) => handleLogin(e.tokenId)}
      onFailure={() => handleLogin}
      cookiePolicy={'single_host_origin'}
      render={(renderProps) => (
        <button
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          className="btn dark-2 btn-md full-width pop-login "
        >
          <i className="ti-user d-inline-block mr-3 "></i>
          login with google
        </button>
      )}
    ></GoogleLogin>
  )
}

export default GoogleLoginBtn
