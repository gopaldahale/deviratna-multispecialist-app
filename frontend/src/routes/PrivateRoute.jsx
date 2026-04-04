import { Navigate } from "react-router-dom";

function PrivateRoutes({ children }) {
    const isUserLoggedIn = localStorage.getItem("loggedInUser")
    return isUserLoggedIn ? children : <Navigate to="/login" />
}

export default PrivateRoutes