import React from 'react'
import ReactDOM from 'react-dom'
import { AppProvider } from '@inlet/react-pixi'
import * as PIXI from 'pixi.js'
import Root from './config/root'

import './assets/scss/main.scss'

const app = new PIXI.Application()

const target = document.getElementById('root')

ReactDOM.render(
  <AppProvider value={app}>
    <Root />
  </AppProvider>,
  target
)
