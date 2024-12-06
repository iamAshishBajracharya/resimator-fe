import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/useRedux";

interface ProtectedRouteProps {
  children: JSX.Element;
  allowedRoles: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const user = useAppSelector((state) => state.auth.user);

  return user && allowedRoles.includes(user.role) ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
