import React, { useState } from 'react';
import './register.css';


const Register = () => {
  const [inputVal, setInputVal] = useState("")
  const [displayVal, setDisplayVal] = useState(false)
  
  const handleClick = (event) => {
    setDisplayVal(true);
    event.preventDefault();
  };
  const handleChange = (event) => {
    const updatedInput = event.target.value;
    setInputVal(updatedInput);
    setDisplayVal(false);
  };
  return (
    <div>
      <form className ="group">
        <label className="ifta-label" htmlFor="input1">Name</label><br/>
        <input onChange={handleChange} type="text" class="ifta-field" id="input1" placeholder="Alex"  /><br/>

        <label className="ifta-label" htmlFor="input1">Username</label><br/>
        <input onChange={handleChange} type="text" class="ifta-field" id="input1" placeholder="myusername"  /><br/>

        <label className="ifta-label" htmlFor="input1">Email</label><br/>
        <input onChange={handleChange} type="email" class="ifta-field" id="input1" placeholder="Alex@gmail.com"  /><br/>

        <label className="ifta-label" htmlFor="input1">New Password</label><br/>
        <input onChange={handleChange} type="password" class="ifta-field" id="input1" placeholder="••••••••"  /><br/>

        <label className="ifta-label" htmlFor="input1">Confirm Password: </label><br/>
        <input onChange={handleChange} type="password" class="ifta-field" id="input1" placeholder="••••••••"  /><br/>

        <button onClick={handleClick}>Submit</button>
      </form>
      {displayVal && <p>{inputVal}</p>}
    </div>
  )
}

export default Register