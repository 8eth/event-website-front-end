import React from 'react'
import Search from './Search'

function RSVP({guests, searchTerm, setSearchTerm, setGuests}) {
  
  return (
   <Search 
      guests={guests}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      setGuests={setGuests}
   />
  )
}

export default RSVP