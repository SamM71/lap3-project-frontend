import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Redirect = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const authenticated = localStorage.getItem("token")
  
    if (!authenticated) {
      navigate("/", { replace: true })
    }
  })
  
  return (
    <div></div>
  )
}

export default Redirect