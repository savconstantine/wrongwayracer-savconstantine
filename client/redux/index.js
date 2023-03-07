import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import socketIO from 'socket.io-client'

import rootReducer from './reducers'
import createHistory from './history'

export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [thunk, routerMiddleware(history)]

const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose

const composedEnhancers = composeFunc(applyMiddleware(...middleware), ...enhancers)

const store = createStore(rootReducer(history), initialState, composedEnhancers)
let socket
const ENABLE_SOCKETS = 'true'

if (typeof ENABLE_SOCKETS !== 'undefined' && ENABLE_SOCKETS === 'true') {
  const initSocket = () => {
    socket = socketIO.connect('wss://wrongway-racer-api.spls.ae/')
    socket.on('connect', () => {
      console.log('connect')
    })

    socket.on('disconnect', () => {
      console.log('disconnect')
    })

    socket.onAny((eventName, ...args) => {
      // eslint-disable-next-line no-console
      console.log(eventName, args)
    })

    socket.on('newChat', (data) => {
      store.dispatch({
        type: 'SET_CHAT',
        payload: data
      })
    })

    socket.on('players', (data) => {
      store.dispatch({
        type: 'SET_PLAYERS',
        payload: data
      })
    })

    socket.on('newEnemy', (data) => {
      const enemy = {
        isActive: true,
        direction: data,
        x: 0,
        y: 0
      }
      store.dispatch({
        type: 'SET_ENEMY',
        payload: enemy
      })
    })
  }

  initSocket()
}
export function getSocket() {
  return socket
}
export default store
