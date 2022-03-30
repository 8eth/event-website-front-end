import React from 'react'

function GuestCard({searchedGuest, setGuests}) {

    function handleRSVPButton(e) {
        e.stopPropagation()
        fetch(`http://localhost:9292/guests/${searchedGuest.id}`, {
          method: "PATCH",
          headers : {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({attending: e.target.attributes['value'].value === 'true'})
        })
    
        fetch('http://localhost:9292/guests')
          .then(response => response.json())
          .then(guests => setGuests(guests));
    }
      
    let guestCard = searchedGuest === undefined ? <div></div> :
        (<div key={searchedGuest.id} className="card">
                <div className="content">
                    <div className="header">
                        {searchedGuest.name}
                    </div>
                    <div className="description">
                        Please RSVP
                    </div>
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        {searchedGuest.attending === true ? 
                            <div className="ui active brown button" >Accept</div> :
                            <div className="ui basic active brown button" value={true} onClick={handleRSVPButton} >Accept</div>
                        }

                        {searchedGuest.attending === false ? 
                            <div className="ui active brown button" >Decline</div> :
                            <div className="ui basic brown button" value={false}  onClick={handleRSVPButton}>Decline</div>          
                        }
                    </div>
                </div>
            </div>
        )

  return (
    <div className="ui one center cards">
        {guestCard}
    </div>
  )
}

export default GuestCard