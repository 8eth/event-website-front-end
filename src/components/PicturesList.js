import React from 'react'
import PicturesCard from './PicturesCard'
import AddPictures from './AddPictures'

function PicturesList({pictures, handleNewPicture}) {
    const mappedPictures = pictures.map((picture) => 
        <PicturesCard
            key={picture.id}
            picture={picture}
        />
    )

  return (
    <div className="picture-page-background"> 
        <br></br>

        <AddPictures 
            handleNewPicture={handleNewPicture}
        />
      
        <div className='ui center aligned grid container'>
            <br></br>
            <h3>Here are some pictures from the party!</h3>
            <br></br>
        </div>

        <div className="form-border ui center aligned five row grid container">
            {mappedPictures}
        </div>

        <br></br>

      </div>
  )
}

export default PicturesList