import React from "react";
import { Redirect } from "../../components";

const NotFound = () => {
  return (
    <Redirect notFound={true}/>
  )
}

export default NotFound