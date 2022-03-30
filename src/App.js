import React from 'react'
import { Route, Switch } from "react-router-dom";
import { useEffect, useState} from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home'
import RSVP from './components/RSVP';
import PicturesList from './components/PicturesList';

function App() {
  const [parties, setParties] = useState([])
  const [guests, setGuests] = useState([])
  const [pictures, setPictures] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch('http://localhost:9292/')
      .then(response => response.json())
      .then(parties => setParties(parties));
  }, [])

  useEffect(() => {
    fetch('http://localhost:9292/guests')
      .then(response => response.json())
      .then(guests => setGuests(guests));
  }, [])

  useEffect(() => {
    fetch('http://localhost:9292/pictures')
      .then(response => response.json())
      .then(pictures => setPictures(pictures));
  }, [])

  function handleNewPicture(newPicture) {
    setPictures([...pictures, newPicture])
  }

  return (
 
    <div>
      <NavBar />
        <Switch>
          <Route exact path='/' >
            <Home 
              parties={parties}
            />
          </Route>
          <Route path="/rsvp">
            <RSVP 
              guests={guests}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              setGuests={setGuests}
            />
          </Route>
          <Route path="/pictures">
            <PicturesList
              pictures={pictures}
              handleNewPicture={handleNewPicture}
            />
          </Route>
        </Switch>
    </div>
  )
}

export default App
