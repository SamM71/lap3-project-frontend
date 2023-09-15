import React, { useState } from "react";
import LottiePlayer from "../LottiePlayer";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://mongo-juice-api.onrender.com/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const responseData = await response.json();

      if (responseData.token) {
        localStorage.setItem("token", responseData.token);

        navigate("/pomodoro");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="formContainer">
      <LottiePlayer
        src="https://lottie.host/b34b9607-317a-4492-a003-bb64f3747aa0/DF0JnCnUXJ.json" // background="#FFFFFF"
        speed="0.8"
        style={{ width: "auto", height: "150px" }}
        loop
        autoplay
        direction="1"
        mode="normal"
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <label for="email-input">Email</label>
        <br />
        <input
          {...register("email")}
          id="email-input"
          type="email"
          placeholder="email"
        />
        <label for="password-input">New Password</label>
        <br />
        <input {...register("password")} id="password-input" type="password" />

        <p>{data}</p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default LoginForm;
