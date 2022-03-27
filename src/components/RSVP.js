import React from 'react'
import NavBar from './NavBar'

function RSVP() {
  return (
    <div style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/background.jpg"})`, 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh'
      }}>
      <NavBar/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* <form className="ui form">
        <div className="field">
          <label>User Input</label>
          <input type="text"/>
        </div>
      </form> */}
      <br></br>

      <div className='ui center aligned two rowgrid container'>
        <h3>Enter your name to search for your invitation</h3>
        <br></br>
        <div className='ui fluid center aligned search'>
          <div className="ui icon input">
            <input className="prompt" type="text" placeholder="Name"/>
            <i className="search icon"></i>
          </div>
          <div className="results"></div>
        </div>
      </div>

    </div>
  )
}

export default RSVP