import React from 'react'
import LottiePlayer from "../LottiePlayer";

const WalkingAnimation = () => {
  return (
    <LottiePlayer
    src="https://lottie.host/0d128b14-f4fd-4a8c-a51c-ed5a2982dd60/ZnJ5pTNBca.json"
    // background="#4C526A"
    speed="1"
    style={{ width: "300px", height: "300px" }}
    loop
    autoplay
    direction="1"
    mode="normal"
  />
  )
}

export default WalkingAnimation