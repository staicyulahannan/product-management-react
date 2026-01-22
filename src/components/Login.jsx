import FormGroup from "./FormGroup";
import { useRef,useState } from "react";
export default function Login({errorMessage,handleButtonClick}) {  
    const usernameRef = useRef();
    const passwordRef = useRef(); 
  
    return (
    <div className="login-page">    
        <h2>Login Page</h2>
        <form>
            <FormGroup ref={usernameRef} label="Username" type="text" id="username" className="form-control" />
            <FormGroup ref={passwordRef}label="Password" type="password" id="password" className="form-control" />
            <button type="submit" onClick={(e)=>handleButtonClick(e,usernameRef.current.value,passwordRef.current.value)}className="btn btn-primary mt-3">Login</button>
            <p>{errorMessage}</p>
        </form>
    </div>
    );  

}