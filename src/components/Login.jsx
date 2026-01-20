import FormGroup from "./FormGroup";
import { useRef,useState } from "react";
export default function Login({setToken}) {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const [ErrorMessage, setErrorMessage] = useState('');
   function handleButtonClick(e) {
    e.preventDefault();
    console.log("Username:", usernameRef.current.value);
    console.log("Password:", passwordRef.current.value);
    fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({    
    username: usernameRef.current.value,
    password: passwordRef.current.value,
    expiresInMins: 30, // optional, defaults to 60
  }),
  
})
.then(res => res.json())
.then(data=>{
    if (data && data.accessToken) {
      localStorage.setItem('token', data.accessToken);
      setToken(data.accessToken); 
      console.log("Login successful, token stored.", data.accessToken);
    } else {
      setErrorMessage(data.message || "Login failed");
    }
  })

  }
    return (
    <div className="login-page">    
        <h2>Login Page</h2>
        <form>
            <FormGroup ref={usernameRef} label="Username" type="text" id="username" className="form-control" />
            <FormGroup ref={passwordRef}label="Password" type="password" id="password" className="form-control" />
            <button type="submit" onClick={handleButtonClick}className="btn btn-primary mt-3">Login</button>
            <p>{ErrorMessage}</p>
        </form>
    </div>
    );  

}