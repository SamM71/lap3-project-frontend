import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './index.css'

const styles = ({ isActive }) => ({ color: isActive ? 'white' : '#31384a', backgroundColor: isActive? '#31384a' : 'transparent'});

const NavBar = () => {
  return (
    <>
      <header>
        <nav id='navBar'>
          <NavLink to="/profile" style={styles} className={"nav-links"}>Profile</NavLink>
          <NavLink to="/pomodoro" style={styles} className={"nav-links pomo-page"}>Pomodoro</NavLink>
          <NavLink to="/logout" id="logout-btn" className={"logout"}>Logout</NavLink>
        </nav>
      </header>
      <Outlet />
      <footer>Made by Mongo-Juice</footer>
    </>
  )
}

export default NavBar
