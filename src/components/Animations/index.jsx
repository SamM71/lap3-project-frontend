import React from "react";
import LottiePlayer from "../LottiePlayer";

const Home = () => {
  return (
    <>
      <LottiePlayer
        src="https://lottie.host/0d128b14-f4fd-4a8c-a51c-ed5a2982dd60/ZnJ5pTNBca.json"
        background="#FFFFFF"
        speed="1"
        style={{ width: "300px", height: "300px" }}
        loop
        autoplay
        direction="1"
        mode="normal"
      />
      <LottiePlayer
        src="https://lottie.host/df111c26-253a-4346-80f6-0bc37bd0d278/Y16pdPcAxB.json"
        background="#FFFFFF"
        speed="1"
        style={{ width: "300px", height: "300px" }}
        loop
        autoplay
        direction="1"
        mode="normal"
      />
    </>
  );
};

export default Home;
