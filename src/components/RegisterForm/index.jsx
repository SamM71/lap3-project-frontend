import React, { useState } from 'react';
import LottiePlayer from "../LottiePlayer";
import { useForm } from "react-hook-form";
import './register.css';


const RegisterForm = () => {
//   const [inputVal, setInputVal] = useState("")
//   const [displayVal, setDisplayVal] = useState(false)

  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div className="formContainer">
         <div className='left'>
            <LottiePlayer
            src="https://lottie.host/b34b9607-317a-4492-a003-bb64f3747aa0/DF0JnCnUXJ.json"             // background="#FFFFFF"
             speed="0.8"
             style={{ width: "auto", height: "150px" }}
             loop
           autoplay
            direction="1"
           mode="normal"
       />
      </div>
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      {/*<Header />*/}
      <label for="name-input">Your Name</label><br /> 
      <input {...register("name")} id="name-input" type="text" placeholder="" />
      <label for="username-input">Username</label><br /> 
      <input {...register("username")} id="username-input" type="text" placeholder="" />
      <label for="email-input">Email</label><br /> 
      <input {...register("email")} id="email-input" type="email" placeholder="" />
      <label for="new-password-input">New Password</label><br /> 
      <input {...register("password")} id="new-password-input" type="password" placeholder="" />
      <label for="confirm-password-input">Confirm Password</label><br /> 
      <input {...register("password")} id="confirm-password-input" type="password" placeholder="" />
      <p>{data}</p>
      <input type="submit" />
    </form>
    </div>
  )
}

export default RegisterForm