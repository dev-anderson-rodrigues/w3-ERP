import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = () => {
  const { isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false);
    };

    checkAuth();
  }, []);
  if(loading){
    return <div style={{width: "100vw", height: "100vh",display: "flex", justifyContent: "center", alignItems: "center"}}>Loading...</div>;
  }
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectRoute