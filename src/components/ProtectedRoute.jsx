import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
export default function ProtectedRoute({children}) {
    const { token } = useContext(AuthContext);
    console.log("ProtectedRoute token:", token);
    return token ? children : <Navigate to="/" />;
}