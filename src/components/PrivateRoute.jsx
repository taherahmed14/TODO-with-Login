import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ children }) => {
    const { loading, token, error } = useSelector((state) => ({
        loading: state.loginState.loading,
        token: state.loginState.token,
        error: state.loginState.error
    }));

    if(!token){
        return <Navigate to={"/login"} />
    }

    return children;
}