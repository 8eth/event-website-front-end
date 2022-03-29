import React from 'react'

function PicturesCard({picture}) {
  return (
  
        
        <div className='center aligned card'>
            <img src={picture.img_link} alt={picture.caption}/>
            <h4>{picture.caption}</h4>
        </div>
        
   
  )
}

export default PicturesCard