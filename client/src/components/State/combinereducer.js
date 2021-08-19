import { combineReducers } from 'redux'
import {
  workReducer,
  authReducer,
  transactionReducer,
  notificationReducer,
  letterReducer,
} from './reducer'

const reducer = combineReducers({
  workReducer,
  authReducer,
  transactionReducer,
  notificationReducer,
  letterReducer,
})

export default reducer
