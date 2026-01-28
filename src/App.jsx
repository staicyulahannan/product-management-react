import Login from "./components/Login.jsx";
import ProductList from "./components/ProductList.jsx";
import ProductEdit from "./components/ProductEdit.jsx";
import Layout from "./components/Layout.jsx";
import ProductAdd from "./components/ProductAdd.jsx";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import{ useContext } from "react";
import { AuthContext } from "./context/AuthContext.jsx";


function App() { 
  
  return (
    <AuthProvider>
   
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id/edit" element={<ProductEdit />} />
            <Route path="/product/add" element={<ProductAdd/>} />
         </Route>
      </Routes>
      
    
    </AuthProvider>
  );
}

export default App;
