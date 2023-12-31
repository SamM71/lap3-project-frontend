import React from 'react'

const PauseButton = (props) => {
  return (
    <button {...props} className='timer-btns'>
      <img src="../pausebtn.png" alt="Pause" width="50" />
    </button>
  )
}

export default PauseButton