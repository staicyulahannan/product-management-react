import Login from "./components/Login.jsx";
import ProductList from "./components/ProductList.jsx";
import ProductEdit from "./components/ProductEdit.jsx";
import Layout from "./components/Layout.jsx";
import { Routes, Route } from "react-router-dom";


function App() { 
  
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<Layout><ProductList /></Layout>} />
         <Route path="/products/:id/edit" element={<Layout><ProductEdit /></Layout>} />
      </Routes>
    </div>
  );
}

export default App;
