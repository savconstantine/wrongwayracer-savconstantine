import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import data from './data'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    data,
    auth
  })

export default createRootReducer
