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

//   import React, {useState} from 'react'

// function Search({guests, searchTerm, setSearchTerm, setGuests}) {
//     const [attendingParty, setAttendingParty] = useState(guests.attending)
  
//     function handleSearch(e) {
//       setSearchTerm(e.target.value)
//     }
  
//     function handleRSVPButton(e) {
//       e.stopPropagation()
//       fetch(`http://localhost:9292/guests/${searchedGuest.id}`, {
//         method: "PATCH",
//         headers : {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({attending: e.target.attributes['value'].value === 'true'})
//       })
  
//       fetch('http://localhost:9292/guests')
//         .then(response => response.json())
//         .then(guests => setGuests(guests));
//     }
    
//     let searchedGuest = undefined
//     if (searchTerm.length > 2) {
//       searchedGuest = guests.find(guest => guest.name.toLowerCase().includes(searchTerm.toLowerCase()));
//     }
  
//     let guestCard = searchedGuest === undefined ? <div></div> :
//       (<div key={searchedGuest.id} className="card">
//         <div className="content">
//         <div className="header">
//           {searchedGuest.name}
//         </div>
//         <div className="description">
//           Please RSVP
//         </div>
//       </div>
//       <div className="extra content">
//         <div className="ui two buttons">
//             {searchedGuest.attending === true ? 
//               <div className="ui active green button" >Accept</div> :
//               <div className="ui basic active green button" value={true} onClick={handleRSVPButton} >Accept</div>
//             }
  
//           {searchedGuest.attending === false ? 
//             <div className="ui active red button" >Decline</div> :
//             <div className="ui basic red button" value={false}  onClick={handleRSVPButton}>Decline</div>          }
//         </div>
//       </div>
//     </div>);
  
//     return (
//       <div style={{
//           backgroundImage: `url(${process.env.PUBLIC_URL + "/images/background.jpg"})`, 
//           backgroundRepeat: 'no-repeat',
//           backgroundPosition: 'center',
//           backgroundSize: 'cover',
//           width: '100vw',
//           height: '100vh'
//         }}>
        
//         <br></br>
        
//         <div className='ui center aligned two rowgrid container center-page'>
//           <h3>Enter your name to search for your invitation</h3>
//           <br></br>
//           <div className='ui fluid center aligned search'>
//             <div className="ui icon input">
//               <input 
//                 className="prompt" 
//                 type="text" 
//                 placeholder="Name"
//                 value={searchTerm}
//                 onChange={(e) => handleSearch(e)}
//               />
//               <i className="search icon"></i>
//             </div>
//             <br></br>
//             <br></br>
//             <br></br>
//             <div className="ui one center cards">
//               {guestCard}
//             </div>
//           </div>
//         </div>
  
//       </div>
//     )
//   }
  
//   export default Search