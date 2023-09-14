import React, { useEffect } from 'react';
import LoginForm from "../../components/LoginForm";
import { updateNav } from '../../scripts';
import { Redirect } from '../../components';


const Login = () => {

  useEffect(() => {
    updateNav()
  })
 
  return (
    <>
      <Redirect mustBeLoggedIn={false}/>
      <LoginForm />
    </>
   
   
  )
}

export default Login
