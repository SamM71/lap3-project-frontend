import React, { useState } from 'react';
import LottiePlayer from "../LottiePlayer";
import { useForm } from "react-hook-form";


const LoginForm = () => {


  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div className='formContainer'>
            <LottiePlayer
            src="https://lottie.host/b34b9607-317a-4492-a003-bb64f3747aa0/DF0JnCnUXJ.json"             // background="#FFFFFF"
             speed="0.8"
             style={{ width: "auto", height: "150px" }}
             loop
           autoplay
            direction="1"
           mode="normal"
       />
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <label for="email-input">Email</label><br /> 
          <input {...register("email")} id="email-input" type="email" />
          <label for="password-input">Password</label><br /> 
          <input {...register("password")} id="password-input" type="password" />
        <p>{data}</p>
        <input type="submit" />
      </form>
    </div>
    
  )
}

export default LoginForm