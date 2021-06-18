import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'


import Home from './components/common/HomePage'
import Header from './components/common/Header'

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={ Home } />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
