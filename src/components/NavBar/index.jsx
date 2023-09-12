import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
const styles = ({ isActive }) => ({ color: isActive ? 'blue' : '#2B061E'});

const NavBar = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/" style={styles} className={"nav-links"}>Home</NavLink>
          <NavLink to="/pomodoro" style={styles} className={"nav-links"}>Pomodoro</NavLink>
          <NavLink to="/profile" style={styles} className={"nav-links"}>Profile</NavLink>
          <NavLink to="/login" style={styles} className={"nav-links"}>Login</NavLink>
          <NavLink to="/register" style={styles} className={"nav-links"}>Register</NavLink>
        </nav>
      </header>
      <Outlet />
      <footer>Made by Mongo-Juice</footer>
    </>
  )
}

export default NavBar