import React from 'react'

const Popup = ({ winner, closePopup }) => {
  return (
    <div className="outerbg">
      <div className="popup">
        <button className="close" onClick={() => closePopup(true)}>
          X
        </button>
        <h1>Result</h1>
        {winner} is winner
        <br />
        <button className="ok" onClick={() => closePopup(true)}>
          Ok
        </button>
      </div>
    </div>
  )
}

export default Popup
