import React from 'react'

function PicturesCard({picture}) {
  return (
  
        
        <div className='center aligned cards'>
          <br></br>
          <div className='ui card'>
            <img src={picture.img_link} alt={picture.caption}/>
            <h4>{picture.caption}</h4>
          </div>
          <br></br>
        </div>
        
   
  )
}

export default PicturesCard