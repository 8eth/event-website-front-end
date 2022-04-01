import React from 'react'
import GuestCard from './GuestCard'

function Search({guests, searchTerm, setSearchTerm, setGuests}) {
  
    function handleSearch(e) {
      setSearchTerm(e.target.value)
    }

    let searchedGuest = undefined
    if (searchTerm.length > 2) {
      searchedGuest = guests.find(guest => guest.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
  
    return (
      <div style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/background.jpg"})`, 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh'
      }}>
        
        <br></br>
        
        <div className='ui center aligned two rowgrid container center-page'>
          <h3>Enter your name to search for your invitation</h3>
          <br></br>
          <div className='ui fluid center aligned search'>
            <div className="ui icon input">
              <input 
                className="prompt" 
                type="text" 
                placeholder="Name"
                value={searchTerm}
                onChange={(e) => handleSearch(e)}
              />
              <i className="search icon"></i>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div>
                <GuestCard
                    searchedGuest= {searchedGuest}
                    setGuests={setGuests}
                />
            </div>
          </div>
        </div>
  
      </div>
    )
  }
  
  export default Search