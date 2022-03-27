import React from 'react'
import NavBar from './NavBar'

function Home() {

  return (
    <div style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/background.jpg"})`, 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh'
      }}>
      <NavBar />
      
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
      
      <div className='ui center aligned grid container'>
        
        <br></br>
        <div className='center aligned'>
          <h4> THE WEDDING OF </h4>
          <p></p>
          <h1> BROOK and KEVEN </h1>
          <h4> APRIL 2, 2022 </h4>
          <h4> 282 KEVEN BROOK, Imogeneborough, CA 58517 </h4>
          <br></br>
          <p> We are very excited to see you there! </p>
        </div>

      </div>
       
        

      

    </div>
  )
}

export default Home