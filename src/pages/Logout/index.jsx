import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { updateNav } from '../../scripts'

const Logout = () => {
  const navigate = useNavigate()

  function logout() {
    localStorage.removeItem("token")
    updateNav()
    navigate("/", { replace: true })
  }

  useEffect(() => {
    logout()
  }, [])


  return (
    <div></div>
  )
}

export default Logout