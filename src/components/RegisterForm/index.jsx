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
      {/*<Header />*/}
      <label>Name</label><br /> 
      <input {...register("name")} type="text" placeholder="Name" />
      <label>Username</label><br /> 
      <input {...register("username")} type="text" placeholder="username" />
      <label>Email</label><br /> 
      <input {...register("email")} type="email" placeholder="email" />
      <label>New Password</label><br /> 
      <input {...register("password")} type="password" placeholder="••••••••" />
      <label>Confirm Password</label><br /> 
      <input {...register("password")} type="password" placeholder="••••••••" />
      <p>{data}</p>
      <input type="submit" />
    </form>
    </div>
  )
}

export default RegisterForm