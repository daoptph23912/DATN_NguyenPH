import { Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const ProtectedRoute = () => {
  const user = localStorage.getItem("token");
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <MainLayout />;
};

export default ProtectedRoute;
