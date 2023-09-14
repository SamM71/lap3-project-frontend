import React from 'react'

const StartButton = (props) => {
  return (
    <button {...props} className='timer-btns'>
      <img src="../../../public/play.png" alt="Start" />
    </button>
  )
}

export default StartButton