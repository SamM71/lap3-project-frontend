import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Redirect = (props) => {
  const navigate = useNavigate()

  useEffect(() => {
    const authenticated = localStorage.getItem("token")
  
    if (!authenticated && (props.mustBeLoggedIn || props.notFound)) {
      navigate("/", { replace: true })
    } else if (authenticated && (!props.mustBeLoggedIn || props.notFound)) {
      navigate("/pomodoro", { replace: true })
    }
  })
  
  return (
    <div></div>
  )
}

export default Redirect