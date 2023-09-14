import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Redirect = (props) => {
  const navigate = useNavigate()

  useEffect(() => {
    const authenticated = localStorage.getItem("token")
  
    if (!authenticated) {
      navigate("/", { replace: true })
    } else if (props.toPomodoro) {
      navigate("/pomodoro", { replace: true })
    }
  })
  
  return (
    <div></div>
  )
}

export default Redirect