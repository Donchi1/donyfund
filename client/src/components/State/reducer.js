import {
  WITHDRAWAL_ERROR,
  WORK_ERROR,
  WORK_SUCCESS,
  WITHDRAWAL_SUCCESS,
  LOGOUT_SUCCESS,
  WORK_NORMAL,
  WORK_NORMAL_AlERT,
  WITHDRAWAL_NORMAL,
  WITHDRAWAL_NORMAL_ALERT,
  UPDATE_PROFILE_SUCCESS_DEFAULT,
  WORK_SUCCESS_DEFAULT,
  NOTIFICATION_DELETE_SUCCESS,
  NOTIFICATION_DELETE_ERROR,
  NOTIFICATION_FETCH_SUCCESS,
  NOTIFICATION_FETCH_ERROR,
  NOTIFICATION_ALERT,
  WORKLIST_SUCCESS,
  WORKLIST_ERROR,
  NORMAL,
  ALERT,
  SUCCESS,
  ERROR,
  WORK_NOTIFICATION_DELETE_ERROR,
  WORK_NOTIFICATION_DELETE_SUCCESS,
  WORK_NOTIFICATION_FETCH_SUCCESS,
  WORK_NOTIFICATION_FETCH_ERROR,
  SUCCESS_PROFILE,
} from './actionCreator'

const initialState = {
  workData: '',
  errorMessage: '',
  successMessage: '',
  userData: '',
  shouldBtnShow: false,
  loading: false,
  successAlert: false,
  worklist: '',
  errorAlert: false,
  worklistError: false,
  worklistErrorMessage: '',
  token: '',
  notificationData: '',
  workNotificationData: '',
}

export const workReducer = (state = initialState, action) => {
  switch (action.type) {
    case WORK_SUCCESS:
      return {
        ...state,

        errorMessage: '',
        successMessage: action.message,
        shouldBtnShow: false,
        loading: false,
        successAlert: true,
        errorAlert: false,
      }
    case WORK_SUCCESS_DEFAULT:
      return {
        ...state,
        workData: action.payload,
        errorMessage: '',
        successMessage: '',
        shouldBtnShow: false,
        loading: false,
        successAlert: false,
        errorAlert: false,
      }

    case WORK_ERROR:
      return {
        ...state,
        workData: '',
        successMessage: '',
        errorMessage: action.message,
        shouldBtnShow: false,
        loading: false,
        successAlert: false,
        errorAlert: true,
      }
    case WORK_NORMAL:
      return {
        ...state,
        loading: true,
        shouldBtnShow: true,
        successAlert: false,
        errorAlert: false,
      }
    case WORK_NORMAL_AlERT:
      return {
        ...state,
        loading: false,
        shouldBtnShow: false,
        successAlert: false,
        errorAlert: false,
      }
    case WORKLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        shouldBtnShow: false,
        successAlert: false,
        errorAlert: false,
        worklist: action.data,
      }
    case WORKLIST_ERROR:
      return {
        ...state,
        loading: false,
        shouldBtnShow: false,
        successAlert: false,
        errorAlert: false,
        worklist: '',
        worklistErrorMessage: action.message,
        workListError: true,
      }

    default:
      return state
  }
}
export const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case WITHDRAWAL_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        errorMessage: '',
        successMessage: action.message,
        shouldBtnShow: false,
        loading: false,
        successAlert: true,
        errorAlert: false,
      }

    case WITHDRAWAL_ERROR:
      return {
        ...state,
        workData: '',
        successMessage: '',
        errorMessage: action.message,
        shouldBtnShow: false,
        loading: false,

        successAlert: false,
        errorAlert: true,
      }
    case WITHDRAWAL_NORMAL:
      return {
        ...state,

        loading: true,
        shouldBtnShow: true,
        successAlert: false,
        errorAlert: false,
      }

    case WITHDRAWAL_NORMAL_ALERT:
      return {
        ...state,

        loading: false,
        shouldBtnShow: false,
        successAlert: false,
        errorAlert: false,
      }

    default:
      return state
  }
}
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        userData: '',
        errorMessage: '',
        successMessage: action.message.message,
        shouldBtnShow: false,
        loading: false,
        successAlert: true,
        errorAlert: false,
      }
    case SUCCESS_PROFILE:
      return {
        ...state,
        userData: action.payload.user,
        errorMessage: '',
        successMessage: action.payload.message,
        shouldBtnShow: false,
        loading: false,
        successAlert: true,
        errorAlert: false,
      }

    case ERROR:
      return {
        ...state,
        userData: '',
        successMessage: '',
        errorMessage: action.message,
        shouldBtnShow: false,
        loading: false,
        successAlert: false,
        errorAlert: true,
      }
    case NORMAL:
      return {
        ...state,
        errorAlert: false,
        shouldBtnShow: true,
        loading: true,
        successAlert: false,
      }
    case ALERT:
      return {
        ...state,
        loading: false,
        shouldBtnShow: false,
        successAlert: false,
        errorAlert: false,
      }

    case UPDATE_PROFILE_SUCCESS_DEFAULT:
      return {
        ...state,
        errorMessage: '',
        successMessage: '',
        userData: action.data,
        shouldBtnShow: false,
        loading: false,
        successAlert: false,
        errorAlert: false,
      }

    case LOGOUT_SUCCESS:
      return {
        ...state,
        workData: '',
        successMessage: action.message,
        shouldBtnShow: false,
        loading: false,
      }

    default:
      return state
  }
}

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case WORK_NOTIFICATION_DELETE_SUCCESS:
      return {
        ...state,
        workNotificationData: action.payload,
      }

    case WORK_NOTIFICATION_DELETE_ERROR:
      return {
        ...state,
        errorAlert: true,
        errorMessage: action.message,
      }
    case WORK_NOTIFICATION_FETCH_SUCCESS:
      return {
        ...state,
        workNotificationData: action.payload,
      }
    case WORK_NOTIFICATION_FETCH_ERROR:
      return {
        ...state,
        errorAlert: true,
        errorMessage: action.message,
      }
    case NOTIFICATION_DELETE_SUCCESS:
      return {
        ...state,
        notificationData: action.payload,
      }

    case NOTIFICATION_DELETE_ERROR:
      return {
        ...state,
        errorAlert: true,
        errorMessage: action.message,
      }
    case NOTIFICATION_FETCH_SUCCESS:
      return {
        ...state,
        notificationData: action.payload,
      }
    case NOTIFICATION_FETCH_ERROR:
      return {
        ...state,
        errorAlert: true,
        errorMessage: action.message,
      }
    case NOTIFICATION_ALERT:
      return {
        ...state,
        errorAlert: false,
        errorMessage: '',
      }

    default:
      return state
  }
}
