import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { StartButton, PauseButton } from '../';

const Timer = () => {
  return (
    <>
      <CircularProgressbar value={60} text={`${60}%`} styles={buildStyles({
        textColor: 'navy',
        pathColor: 'red',
        tailColor: 'grey'
      })}/>
      <div>
        <StartButton />
        <PauseButton />
      </div>
    </>
  )
}

export default Timer