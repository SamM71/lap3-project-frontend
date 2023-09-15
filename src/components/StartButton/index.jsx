import React from 'react'

const StartButton = (props) => {
  return (
    <button {...props} className='timer-btns'>
      <img src="../playbtn.png" alt="Start" width="50" />
    </button>
  )
}

export default StartButton