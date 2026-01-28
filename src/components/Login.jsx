import FormGroup from "./FormGroup";
import { useEffect } from "react";
import loginAuth from "./LoginRouter";
import { useRef,useState ,createContext,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() { 
  const navigate = useNavigate();

  const { token, saveToken } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(null);
  
    const usernameRef = useRef();
    const passwordRef = useRef(); 
   function handleButtonClick(e) {
    e.preventDefault();

    loginAuth(
      usernameRef.current.value,
      passwordRef.current.value
    ).then(data => {
      if (data.accessToken) {
        saveToken(data.accessToken);
        navigate("/products");
      } else {
        setErrorMessage(data.message || "Login failed");
      }
    });
  }
  useEffect(() => {
    if (token) {
      navigate("/products", { replace: true });
    }
  }, [token, navigate]);
    return (
   <>
   
        <div className="login-page"> 
        <h2>Login Page</h2>
        <form>
            <FormGroup ref={usernameRef} label="Username" type="text" id="username" className="form-control" />
            <FormGroup ref={passwordRef}label="Password" type="password" id="password" className="form-control" />
            <button type="submit" onClick={handleButtonClick}className="btn btn-primary mt-3">Login</button>
            <p>{errorMessage}</p>
        </form>
    
    </div>  
   
    </>

    );  

}