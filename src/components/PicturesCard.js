import React from 'react'

function PicturesCard({picture}) {
  return (
  
        
        <div className='center aligned card'>
          <br></br>
            <img src={picture.img_link} alt={picture.caption}/>
            <h4>{picture.caption}</h4>
            <br></br>
        </div>
        
   
  )
}

export default PicturesCard