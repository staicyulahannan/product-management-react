import { useState } from "react";
import Login from "./components/Login.jsx";
import ProductList from "./components/ProductList.jsx";
import Layout from "./components/Layout.jsx";
function App() {
  const [token, setToken] = useState(null);
  console.log(token);
  return (
    <div className="wrapper">
      {token?<Layout setToken={setToken}><ProductList /></Layout>:<Login setToken={setToken} />}
     
    </div>
  );
}

export default App;
