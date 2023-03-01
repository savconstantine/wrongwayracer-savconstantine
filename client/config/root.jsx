import React from 'react'
import { Provider } from 'react-redux'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import store, { history } from '../redux'

import Home from '../components/home'
import DummyView from '../components/dummy-view'
import NotFound from '../components/404'

import Startup from './startup'

const RootComponent = (props) => {
  return (
    <Provider store={store}>
      <BrowserRouter history={history} location={props.location} context={props.context}>
        <Startup>
          <Routes>
            <Route exact path="/" element={<DummyView />} />
            <Route exact path="/dashboard" component={Home} />
            {/* <PrivateRoute exact path="/hidden-route" component={DummyView} /> */}
            {/* <OnlyAnonymousRoute exact path="/anonymous-route" component={DummyView} /> */}

            <Route component={NotFound} />
          </Routes>
        </Startup>
      </BrowserRouter>
    </Provider>
  )
}

export default RootComponent
