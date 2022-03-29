import React from 'react'
import { Route, Switch } from "react-router-dom";
import { useEffect, useState} from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home'
import RSVP from './components/RSVP';
import PicturesList from './components/PicturesList';

function App() {
  const [guests, setGuests] = useState([])
  const [pictures, setPictures] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  // const [searchResult, setSearchResult] = useState("")

  useEffect(() => {
    fetch('http://localhost:9292/guests')
      .then(response => response.json())
      .then(guests => setGuests(guests));
      // .then(console.log)
  }, [])

  useEffect(() => {
    fetch('http://localhost:9292/pictures')
      .then(response => response.json())
      .then(pictures => setPictures(pictures));
      // .then(console.log)
  }, [])


  // guests.filter(guest => console.log(guest.name))

  return (
 
    <div>
      <NavBar />
        <Switch>
          <Route exact path='/' >
            <Home />
          </Route>
          <Route path="/rsvp">
            <RSVP 
              guests={guests}
              // searchResult={searchResult}
              // setSearchResult={setSearchResult}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              setGuests={setGuests}
              // searchedGuest={searchedGuest}
            />
          </Route>
          <Route path="/pictures">
            <PicturesList
              pictures={pictures}
            />
          </Route>
        </Switch>
    </div>
  )
}

export default App
