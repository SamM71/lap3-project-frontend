import React, { useEffect, useState } from 'react';
import RegisterForm from "../../components/RegisterForm";
import { updateNav } from '../../scripts';


const Register = () => {
  useEffect(() => {
    updateNav()
  })
 
  return (
    <RegisterForm />
  )
}

export default Register