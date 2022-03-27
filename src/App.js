import React from 'react'
import { Route, Switch } from "react-router-dom";
import { useEffect, useState} from 'react';
// import NavBar from './components/NavBar';
import Home from './components/Home'
import RSVP from './components/RSVP';

function App() {
  const [guests, setGuests] = useState([])
  const [searchResult, setSearchResult] = useState("")

  useEffect(() => {
    fetch('http://localhost:9292/')
      .then(r => r.json())
      .then(guests => setGuests(guests));
  }, [])
  
  // const searchedGuest = guests.filter(guest => guest.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div>
      {/* <NavBar /> */}
        <Switch>
          <Route exact path='/' >
            <Home />
          </Route>
          <Route path="/rsvp">
            <RSVP 
              guests={guests}
              searchResult={searchResult}
              setSearchResult={setSearchResult}
              // searchedGuest={searchedGuest}
            />
          </Route>
        </Switch>
    </div>
  )
}

export default App
