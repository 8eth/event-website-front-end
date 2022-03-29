import React from 'react'
import PicturesCard from './PicturesCard'

function PicturesList({pictures}) {
    const mappedPictures = pictures.map((picture) => 
        <PicturesCard
            key={picture.id}
            picture={picture}
        />
    )


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

        <div className="ui  center aligned grid container">
            {mappedPictures}
              
        </div>


      </div>
  )
}

export default PicturesList