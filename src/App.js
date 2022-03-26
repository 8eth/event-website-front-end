import React from 'react'
import { Route, Switch } from "react-router-dom";
import Header from './components/Header'
import NavBar from './components/NavBar'
import Home from './components/Home'
import RSVP from './components/RSVP';

function App() {
  return (
    <div>App
      <Header />
        <NavBar />
        <Switch>
          <Route exact path='/' >
            <Home />
          </Route>
          <Route path="/rsvp">
            <RSVP />
          </Route>
        </Switch>
    </div>
  )
}

export default App
