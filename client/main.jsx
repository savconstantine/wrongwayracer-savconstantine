import React from 'react'
import ReactDOM from 'react-dom'
import { AppProvider } from '@inlet/react-pixi'
import * as PIXI from 'pixi.js'
import Root from './config/root'

import './assets/scss/main.scss'

const app = new PIXI.Application()
globalThis.__PIXI_APP__ = app // eslint-disable-line no-underscore-dangle

const target = document.getElementById('root')

ReactDOM.render(
  <AppProvider value={app}>
    <Root />
  </AppProvider>,
  target
)
