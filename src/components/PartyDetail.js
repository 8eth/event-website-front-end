import React from 'react'

function PartyDetail({party}) {
  return (
    <div>
        <br></br>
        <div className='ui center aligned grid container'>
            <br></br>
            <div className='center aligned center-page'>
                <h4> {party.event_name} </h4>
                <p></p>
                <h1> {party.event_host} </h1>
                <h4> {party.event_date} </h4>
                <h4> {party.event_address} </h4>
                <br></br>
                <p> {party.short_message} </p>
            </div>
        </div>
    </div>
  )
}

export default PartyDetail