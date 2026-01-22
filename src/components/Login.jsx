import FormGroup from "./FormGroup";
import Layout from "./Layout";
import ProductList from "./ProductList";
import { useRef,useState ,createContext } from "react";
import { useNavigate } from "react-router-dom";
 export  const tokenContext = createContext();
export default function Login() { 
  const navigate = useNavigate();

  const [token, setToken] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  
    const usernameRef = useRef();
    const passwordRef = useRef(); 
    function handleButtonClick(e) {
    e.preventDefault();    
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
      
      setToken(data.accessToken); 
      navigate("/products");
    } else {
      setErrorMessage(data.message || "Login failed");
    }
  })

  }
    return (
   <>
    {!token?( 
        <div className="login-page"> 
        <h2>Login Page</h2>
        <form>
            <FormGroup ref={usernameRef} label="Username" type="text" id="username" className="form-control" />
            <FormGroup ref={passwordRef}label="Password" type="password" id="password" className="form-control" />
            <button type="submit" onClick={handleButtonClick}className="btn btn-primary mt-3">Login</button>
            <p>{errorMessage}</p>
        </form>
    
    </div>  
    ):(<tokenContext.Provider value={token}>
        <Layout setToken={setToken}><ProductList /></Layout>
    </tokenContext.Provider>
  )}
    </>

    );  

}