import React, { useEffect, useState, useRef, useContext } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { StartButton, PauseButton, WalkingAnimation, SleepingAnimation } from '../';
import TimerContext from '../../contexts';

const Timer = (props) => {
  const timerInfo = useContext(TimerContext)

  const [isPaused, setIsPaused] = useState(true)
  const [secondsLeft, setSecondsLeft] = useState(0)
  const [mode, setMode] = useState('work')
  const secondsLeftRef = useRef(secondsLeft)
  const isPausedRef = useRef(isPaused)
  const modeRef = useRef(mode)

  let player = document.querySelector("lottie-player")

  function initTimer() {
    if (mode === "work") {
      secondsLeftRef.current = timerInfo.workMinutes * 60

    } else {
      secondsLeftRef.current = timerInfo.breakMinutes * 60
    }
    setSecondsLeft(secondsLeftRef.current)
  }
  
  function tick() {
    secondsLeftRef.current--
    setSecondsLeft(prev => prev -1) // line doesn't seem to do anything but the DOM won't update without it
  }
  
  useEffect(() => {
    function switchMode() {

      const nextMode = modeRef.current === 'work' ? 'break' : 'work'
      setMode(nextMode)
      modeRef.current = nextMode

      const nextSeconds = (nextMode === 'work' ? timerInfo.workMinutes : timerInfo.breakMinutes) * 60
      setSecondsLeft(nextSeconds)
      secondsLeftRef.current = nextSeconds

      if (modeRef.current === 'break') {
        setSecondsLeft(5*60)
      secondsLeftRef.current = 5*60
        props.openModal()
      }
    }
    
    initTimer()
    
    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        setIsPaused(true)
        isPausedRef.current = true
        return switchMode()
      }
      tick()
    }, 10)

    return () => {
      clearInterval(interval)
    }
  }, [timerInfo])

  const totalSeconds = mode === 'work' ? timerInfo.workMinutes * 60 : timerInfo.breakMinutes * 60 
  const percentage = Math.round(secondsLeft / totalSeconds * 100)
  let minutes = Math.floor(secondsLeft / 60)
  let seconds = Math.floor(secondsLeft % 60)

  if (seconds < 10) seconds = '0' + seconds
  if (minutes < 10) minutes = '0' + minutes

  return (
    <div className='timer-container'>
      <div className='message'>
        <header>
          Time to {
            mode === 'work' ? 'work!' : 'relax!'
          }
        </header>
      </div>
      <div className='timer'>

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
              isPausedRef.current = false
              player = document.querySelector("lottie-player")
              player.play()
              }}/> 
            : 
              <PauseButton onClick={() => {
                setIsPaused(true)
                isPausedRef.current = true
                player.pause()}}/>
              }
        </div>
      </div>
      <div className='animation'>
        <div>
          {
            mode === 'work' ? <WalkingAnimation /> : <SleepingAnimation />
          }
        </div>
      </div>
    </div>
  )
}

export default Timer