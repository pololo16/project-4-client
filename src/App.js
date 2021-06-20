import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'


import Home from './components/common/HomePage'
import Header from './components/common/Header'
import FlightShow from './components/FlightsShow'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path = '/register' component ={Register}/>
          <Route path='/login' component={Login}/>
          <Route path='/flights' component={FlightShow}/>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
