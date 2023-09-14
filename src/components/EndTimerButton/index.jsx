import React from 'react'

const EndTimerButton = (props) => {
  return (
    <button {...props} className='timer-btns'>
      <img src="../../../public/stop.png" alt="Stop" />
    </button>
  )
}

export default EndTimerButton