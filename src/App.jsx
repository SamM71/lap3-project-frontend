import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, Profile, Login, Register, Timer } from './pages';
import { NavBar } from "./components";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
        <Route index element={<Home />}/>
          <Route path="profile" element={<Profile />}/>
          <Route path="login" element={<Login />}/>
          <Route path="register" element={<Register />}/>
          <Route path="timer" element={<Timer />}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
