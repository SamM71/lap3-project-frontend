import React from "react";
import { Redirect } from "../../components";

const NotFound = () => {
  return (
    <Redirect toPomodoro={true}/>
  )
}

export default NotFound