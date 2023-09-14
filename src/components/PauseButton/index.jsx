import React from 'react'

const PauseButton = (props) => {
  return (
    <button {...props} className='timer-btns'>
      <img src="../../../public/pause.png" alt="Pause" />
    </button>
  )
}

export default PauseButton