import React from 'react'
import PartyDetail from './PartyDetail'

function Home({parties}) {
  const mappedParties = parties.map((party) => 
    <PartyDetail 
      party={party}
    />
  )

  return (
    <div 
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/background.jpg"})`, 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh'
      }}>
      
      <div>
        {mappedParties}
      </div>
  
    </div>
  )
}

export default Home