import { useState,createContext } from "react";
import Login from "./components/Login.jsx";
import ProductList from "./components/ProductList.jsx";
import Layout from "./components/Layout.jsx";
 export  const tokenContext = createContext();
function App() {
  const [token, setToken] = useState(null);
 const [errorMessage, setErrorMessage] = useState(null);
  console.log("Current token:", token);
  
   function handleButtonClick(e,username,password) {
    e.preventDefault();
    
    fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({    
    username: username,
    password: password,
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
    <div className="wrapper">
      {token?(
        <tokenContext.Provider value={token}>
        <Layout setToken={setToken}><ProductList /></Layout>
        </tokenContext.Provider>):<Login errorMessage={errorMessage} handleButtonClick={handleButtonClick}/>}
     
    </div>
  );
}

export default App;
