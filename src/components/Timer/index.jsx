import React, { useEffect, useState, useRef, useContext } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { StartButton, PauseButton } from '../';
import TimerContext from '../../contexts';

const Timer = () => {
  const timerInfo = useContext(TimerContext)

  const [isPaused, setIsPaused] = useState(true)
  const [secondsLeft, setSecondsLeft] = useState(0)
  const [mode, setMode] = useState('work')
  const secondsLeftRef = useRef(secondsLeft)
  const isPausedRef = useRef(isPaused)
  const modeRef = useRef(mode)

  function initTimer() {
    console.log("line 15", timerInfo.workMinutes)
    secondsLeftRef.current = timerInfo.workMinutes * 60
    setSecondsLeft(secondsLeftRef.current)
    console.log("line 17", secondsLeftRef.current)
  }

  
  function tick() {
    secondsLeftRef.current--
    setSecondsLeft(prev => prev -1) // line doesn't seem to do anything but the DOM won't update without it
    console.log(secondsLeftRef.current)
    console.log(secondsLeft)
    // console.log(secondsLeft)
  }
  
  useEffect(() => {
    function switchMode() {
      const nextMode = modeRef.current === 'work' ? 'break' : 'work'
      setMode(nextMode)
      modeRef.current = nextMode
      const nextSeconds = (nextMode === 'work' ? timerInfo.workMinutes : timerInfo.breakMinutes) * 60
      setSecondsLeft(nextSeconds)
      secondsLeftRef.current = nextSeconds
    }
    console.log("first")

    initTimer()
    
    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode()
      }
      tick()
    }, 1000)
    return () => clearInterval(interval)
  }, [timerInfo])

  const totalSeconds = mode === 'work' ? timerInfo.workMinutes * 60 : timerInfo.breakMinutes * 60 
  const percentage = Math.round(secondsLeft / totalSeconds * 100)
  let minutes = Math.floor(secondsLeft / 60)
  let seconds = Math.floor(secondsLeft % 60)

  if (seconds < 10) seconds = '0' + seconds
  if (minutes < 10) minutes = '0' + minutes

  return (
    <>
      <CircularProgressbar
        className='cprogress-bar'
        value={percentage} 
        text={minutes + ":" + seconds} 
        styles={buildStyles({
          textColor: 'white',
          pathColor: mode === 'work' ? 'red' : 'green',
          tailColor: 'grey'
      })}/>
      <div>
        {
          isPaused ? 
            <StartButton onClick={() => {
            setIsPaused(false)
            isPausedRef.current = false}}/> 
            : 
            <PauseButton onClick={() => {
            setIsPaused(true)
            isPausedRef.current = true}}/>
        }
      </div>
    </>
  )
}

export default Timer