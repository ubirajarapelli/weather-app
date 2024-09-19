import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  const userToken = sessionStorage.getItem("userToken");

  const token = JSON.parse(userToken) || null;

  return token ? <Outlet /> : <Navigate to="/login" />;
};
