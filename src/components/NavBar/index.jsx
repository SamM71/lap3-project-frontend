import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const styles = ({ isActive }) => ({ color: isActive ? 'blue' : '#2B061E'});

const NavBar = () => {
  return (
    <>
      <header>
        <nav id='navBar'>
          <NavLink to="/pomodoro" style={styles} className={"nav-links"}>Pomodoro</NavLink>
          <NavLink to="/profile" style={styles} className={"nav-links"}>Profile</NavLink>
          <NavLink to="/logout" style={styles} className={"nav-links"}>Logout</NavLink>
        </nav>
      </header>
      <Outlet />
      <footer>Made by Mongo-Juice</footer>
    </>
  )
}

export default NavBar
