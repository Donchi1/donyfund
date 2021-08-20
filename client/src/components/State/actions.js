import Axios from 'axios'

import {
  LOGOUT_SUCCESS,
  WORK_ERROR,
  WORK_SUCCESS,
  WITHDRAWAL_ERROR,
  WITHDRAWAL_SUCCESS,
  NOTIFICATION_DELETE_SUCCESS,
  NOTIFICATION_DELETE_ERROR,
  ERROR,
  SUCCESS,
  WORK_NOTIFICATION_DELETE_ERROR,
  WORK_NOTIFICATION_DELETE_SUCCESS,
  SUCCESS_PROFILE,
} from './actionCreator'
import { store } from './store'

const { dispatch } = store
export const registerAction = (userData) => {
  return Axios.post(
    `${process.env.REACT_APP_AUTH_REQUEST_URL}/register`,
    userData,
  )
    .then((res) => {
      const data = res.data
      dispatch({
        type: SUCCESS,
        message: data,
      })
    })
    .catch((error) => {
      const { message } = error.response.data
      dispatch({ type: ERROR, message })
    })
}
export const loginAction = (userData) => {
  return Axios.post(`${process.env.REACT_APP_AUTH_REQUEST_URL}/login`, userData)
    .then((res) => {
      const data = res.data
      dispatch({
        type: SUCCESS,
        message: data,
      })
      localStorage.setItem('status', JSON.stringify(data.loginStatus))
      window.location.assign('/user/dashboard')
    })
    .catch((error) => {
      const { message } = error.response.data
      dispatch({
        type: ERROR,
        message,
      })
    })
}
export const passwordResetAction = (email) => {
  return Axios.post(`${process.env.REACT_APP_AUTH_REQUEST_URL}/reset`, {
    email,
  })
    .then((res) => {
      const data = res.data
      dispatch({
        type: SUCCESS,
        message: data,
      })
    })
    .catch((error) => {
      dispatch({
        type: ERROR,
        message: error.response.data.message,
      })
    })
}
export const passwordUpdateAction = (userData) => {
  return Axios.put(`${process.env.REACT_APP_AUTH_REQUEST_URL}/update`, userData)

    .then((res) => {
      const data = res.data
      dispatch({
        type: SUCCESS,
        message: data,
      })
    })
    .catch((error) => {
      const { message } = error.response.data
      dispatch({
        type: ERROR,
        message: message,
      })
    })
}

export const logoutAction = () => {
  return Axios.delete(`${process.env.REACT_APP_AUTH_REQUEST_URL}/logout`)
    .then((res) => {
      const data = res.data
      dispatch({ type: LOGOUT_SUCCESS, message: data })
      localStorage.removeItem('status')
      window.location.assign('/')
    })
    .catch((err) => {
      console.log(err.response.data.message)
    })
}

export const updateUserProfileAction = (userData) => {
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  }
  return Axios.post(
    `${process.env.REACT_APP_AUTH_REQUEST_URL}/update/profile`,
    config,
    userData,
  )
    .then((res) => {
      const data = res.data

      dispatch({ type: SUCCESS_PROFILE, payload: data })
    })
    .catch((err) => {
      const { message } = err.response.data
      dispatch({ type: ERROR, message })
    })
}
export const withdrawalAction = (userData, dispatch) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Withdrawal success 2minutes')
    }, 2000)
  })
    .then((data) => {
      dispatch({ type: WITHDRAWAL_SUCCESS, message: data })
    })
    .catch((error) => {
      dispatch({ type: WITHDRAWAL_ERROR, message: error })
    })
}
export const adminLoginAction = (userData) => {
  return Axios.post(
    `${process.env.REACT_APP_AUTH_REQUEST_ADMIN_URL}/dashboard`,
    userData,
  )
    .then(() => {
      return
    })
    .catch((error) => {
      return dispatch({ type: ERROR, message: error })
    })
}
export const blogWorkAction = (userData) => {
  return Axios.post(
    `${process.env.REACT_APP_API_REQUEST_URL}/works/add/blog`,
    userData,
  )

    .then((res) => {
      const data = res.data
      dispatch({
        type: WORK_SUCCESS,
        message: data,
      })
    })
    .catch((error) => {
      dispatch({
        type: WORK_ERROR,
        message: error.response.data.message,
      })
    })
}
export const advertWorkAction = (userData) => {
  return Axios.post(
    `${process.env.REACT_APP_API_REQUEST_URL}/works/add/advert`,
    userData,
  )

    .then((res) => {
      const data = res.data
      dispatch({
        type: WORK_SUCCESS,
        message: data,
      })
    })
    .catch((error) => {
      dispatch({
        type: WORK_ERROR,
        message: error.response.data.message,
      })
    })
}
export const articleWorkAction = (userData) => {
  return Axios.post(
    `${process.env.REACT_APP_API_REQUEST_URL}/works/add/article`,
    userData,
  )

    .then((res) => {
      const data = res.data
      dispatch({
        type: WORK_SUCCESS,
        message: data,
      })
    })
    .catch((error) => {
      dispatch({
        type: WORK_ERROR,
        message: error.response.data.message,
      })
    })
}

export const notificationDeleteAction = (id) => {
  Axios.delete(
    `${process.env.REACT_APP_API_REQUEST_URL}/notification/delete/${id}`,
  )
    .then((res) => {
      const data = res.data.notes.filter((notes) => notes._id !== id)
      dispatch({ type: NOTIFICATION_DELETE_SUCCESS, payload: data })
    })
    .catch((err) => {
      dispatch({
        type: NOTIFICATION_DELETE_ERROR,
        message: err.response.data.message,
      })
    })
}
export const workNotificationDeleteAction = (id) => {
  Axios.delete(`${process.env.REACT_APP_API_REQUEST_URL}/work/delete/${id}`)
    .then((res) => {
      const data = res.data.notes
      dispatch({ type: WORK_NOTIFICATION_DELETE_SUCCESS, payload: data })
    })
    .catch((err) => {
      dispatch({
        type: WORK_NOTIFICATION_DELETE_ERROR,
        message: err.response.data.message,
      })
    })
}
export const emailActivateAction = (token) => {
  Axios.post(`${process.env.REACT_APP_AUTH_REQUEST_URL}/activate`, token)
    .then((res) => {
      const data = res.data
      dispatch({ type: SUCCESS, data })
    })
    .catch((err) => {
      dispatch({
        type: ERROR,
        message: err.response.data.message,
      })
    })
}

export const contactAction = (userData) => {
  return Axios.post(
    `${process.env.REACT_APP_API_REQUEST_URL}/general/contact`,
    userData,
  )
    .then((res) => {
      dispatch({ type: SUCCESS, data: res.data })
    })
    .catch((error) => {
      dispatch({ type: ERROR, message: error.response.data.message })
    })
}
export const newsLetterAction = (userData, letterInfo, setLetterInfo) => {
  return Axios.post(
    `${process.env.REACT_APP_API_REQUEST_URL}/general/newsLetter`,
    { userData },
  )
    .then((res) => {
      setLetterInfo({
        ...letterInfo,
        errorMessage: '',
        successMessage: res.data,
        shouldBtnShow: false,
        loading: false,
        successAlert: true,
        errorAlert: false,
      })
    })
    .catch((error) => {
      const { message } = error.response.data
      setLetterInfo({
        ...letterInfo,
        errorMessage: message,
        successMessage: '',
        shouldBtnShow: false,
        loading: false,
        successAlert: false,
        errorAlert: true,
      })
    })
}
