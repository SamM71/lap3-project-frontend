import React from 'react'

const EndTimerButton = (props) => {
  return (
    <button {...props} className='timer-btns'>
      <img src="../stopbtn.png" alt="Stop" width="50"/>
    </button>
  )
}

export default EndTimerButton