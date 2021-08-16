import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducer from './combinereducer'

export const store = createStore(reducer, applyMiddleware(thunk))

function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>
}

export default StoreProvider
