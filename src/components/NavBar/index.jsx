import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
const styles = ({ isActive }) => ({ color: isActive ? '#2B061E' : '#ffffff'});

const NavBar = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/" style={styles}>Home</NavLink>
          <NavLink to="/profile" style={styles}>Profile</NavLink>
          <NavLink to="/login" style={styles}>Login</NavLink>
          <NavLink to="/register" style={styles}>Register</NavLink>
        </nav>
      </header>
      <Outlet />
      <footer>Made by Mongo-Juice</footer>
    </>
  )
}

export default NavBar