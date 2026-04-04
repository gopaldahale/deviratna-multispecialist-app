import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  return user ? <Navigate to="/dashboard" /> : children;
};

export default PublicRoute;