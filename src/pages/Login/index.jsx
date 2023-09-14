import React, { useEffect } from 'react';
import LoginForm from "../../components/LoginForm";
import { updateNav } from '../../scripts';


const Login = () => {

  useEffect(() => {
    updateNav()
  })
 
  return (
    <LoginForm />
   
   
  )
}

export default Login
