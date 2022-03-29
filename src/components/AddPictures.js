import React, {useState, useEffect, useRef} from 'react'
import { useHistory } from "react-router-dom";


function AddPictures({handleNewPicture}) {
  let history = useHistory();

  const [pictureInfo, setPictureInfo] = useState({
    caption: "", 
    img_link: "",
    party_id: 1
  })

  const formInputInitialState = {
    caption: "",
    img_link: "",
    party_id: 1
  }

  const nameInputRef = useRef(null)

  useEffect(() => {
    nameInputRef.current.focus()
  }, [])

  function handleChange(e) {
    setPictureInfo({
      ...pictureInfo,
      [e.target.name]: e.target.value
    })
  }

  function addPictureData(e) {
    e.preventDefault()

    const newPicture = {
      caption: pictureInfo.caption,
      img_link: pictureInfo.img_link,
      party_id: pictureInfo.party_id
    }

    fetch('http://localhost:9292/pictures', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPicture),
    })
      .then((response) => response.json())
      .then(handleNewPicture)
      .then(setPictureInfo(formInputInitialState))
    history.push("/pictures");
  }

  return (
    <div className="indent">
      <br></br>
      <h3 className="form-border center-content">Do you have pictures from the event you want to share with us?</h3>
      <div className="form-border center-content">
        <div className="ui grid">
          <form
            className="ui two fields form center"
            onSubmit={(e) => addPictureData(e)}
          >
            <div className="required field">
              <label className="center" htmlFor="caption">
                Caption:{" "}
              </label>
              <input
                type="text"
                name="caption"
                ref={nameInputRef}
                value={pictureInfo.caption}
                id={FormData.caption}
                onChange={(e) => handleChange(e)}
                placeholder="Caption"
              ></input>
            </div>
            <div className="required field">
              <label className="center" htmlFor="img_link">
                Image Link:{" "}
              </label>
              <input
                type="text"
                name="image_url"
                value={pictureInfo.img_link}
                id={FormData.img_link}
                onChange={(e) => handleChange(e)}
                placeholder="img link"
              ></input>
            </div>
            <button className="ui submit button center" type="submit">
              Add Picture
            </button>
          </form>
        </div>
      </div>
      <br></br>
    </div>
  )
}

export default AddPictures