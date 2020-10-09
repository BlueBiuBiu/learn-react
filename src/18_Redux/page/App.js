import React, { PureComponent } from 'react'
// import Home from './Home2'
// import About from './About'
import HomeRudex from './redux-saga拦截action'
import store from '../store/index'
import { Provider } from 'react-redux'

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={ store }>
        {/* <Home />
        <About /> */}
        <HomeRudex />
      </Provider>
    )
  }
}
