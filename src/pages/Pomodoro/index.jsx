import React, { useState } from 'react'
import { Timer } from '../../components'
import TimerContext from '../../contexts'

const Pomodoro = () => {
  const [workMinutes, setWorkMinutes] = useState(0.5)
  const [breakMinutes, setBreakMinutes] = useState(5)

  return (
    <>
    <TimerContext.Provider value ={{
      workMinutes,
      setWorkMinutes,
      breakMinutes,
      setBreakMinutes
    }}>
      <Timer />
    </TimerContext.Provider>
    </>
  )
}

export default Pomodoro