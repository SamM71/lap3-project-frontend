import React, { useState } from 'react';
import LottiePlayer from "../LottiePlayer";
import { useForm } from "react-hook-form";


const RegisterForm = () => {


  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div className="grid-container">
         <div className='left'>
            <LottiePlayer
            src="https://lottie.host/a45a8085-dab9-4bf7-8aee-35a38ebf4e42/aDFz0w3EDb.json"             // background="#FFFFFF"
             speed="0.8"
             style={{ width: "auto", height: "400px" }}
             loop
           autoplay
            direction="1"
           mode="normal"
       />
      </div>
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <label>Email</label><br /> 
      <input {...register("email")} type="email" placeholder="email" />
      <label>Password</label><br /> 
      <input {...register("password")} type="password" placeholder="••••••••" />
      <p>{data}</p>
      <input type="submit" />
    </form>
    </div>
  )
}

export default RegisterForm