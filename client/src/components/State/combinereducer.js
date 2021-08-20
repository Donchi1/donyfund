import { combineReducers } from 'redux'
import {
  workReducer,
  authReducer,
  transactionReducer,
  notificationReducer,
} from './reducer'

const reducer = combineReducers({
  workReducer,
  authReducer,
  transactionReducer,
  notificationReducer,
})

export default reducer
