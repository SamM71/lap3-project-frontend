import React, { useEffect, useState } from 'react';
import RegisterForm from "../../components/RegisterForm";
import { updateNav } from '../../scripts';
import { Redirect } from '../../components';


const Register = () => {
  useEffect(() => {
    updateNav()
  })
 
  return (
    <>
      <Redirect mustBeLoggedIn={false}/>
      <RegisterForm />
    </>
  )
}

export default Register