import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Provider } from 'react-redux'
import store from './configureStore'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/home'
import PingPage from './pages/pingpong'
import UserPage from './pages/user'
import CounterPage from './pages/counter'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
            <div className="App-intro">
              <Route exact path="/" component={HomePage} />
              <Route path="/ping" component={PingPage} />
              <Route path="/user" component={UserPage} />
              <Route path="/counter" component={CounterPage} />
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
