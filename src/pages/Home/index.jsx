import React, { useEffect } from 'react'
import "@lottiefiles/lottie-player";
import LottiePlayer from "../../components/LottiePlayer";
import './index.css'
import { Link } from 'react-router-dom'
import { updateNav } from '../../scripts';
import { Redirect } from '../../components';

const Home = () => {

  useEffect(() => {
    updateNav()
  })

  return (
    <>
    <Redirect mustBeLoggedIn={false}/>
    <div id='home-page'>
    <div>
    <h1 id='home-title'>Pomo<br />Dogo</h1>
    </div>
      <LottiePlayer
                src="https://lottie.host/a45a8085-dab9-4bf7-8aee-35a38ebf4e42/aDFz0w3EDb.json"             // background="#FFFFFF"
                speed="0.8"
                style={{ 
                  width: "auto",
                  height: "600px",
                  marginLeft: "-250px",
                  padding: "0px",
                  }}
                loop
                autoplay
                direction="1"
              mode="normal"
              id='home-dog'
          />
          <div className="bubble">Welcome to PomoDogo the place to be productive and get your work done!</div>
    </div>
    <Link className="home-btn" to="/register">Sign Up Here!</Link>
    <Link className="home-btn" id='login-btn' to="/login">Login</Link>
    </>
  )
}

export default Home
