import { Link, Navigate } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { loginLoading, loginSuccessfull } from "../features/login/actions";

export const Navbar = () => {

    const { loading, token, error } = useSelector((state) => ({
        loading: state.loginState.loading,
        token: state.loginState.token,
        error: state.loginState.error
    }));

    const dispatch = useDispatch();

    const logout = () => {
        dispatch(loginLoading());
        dispatch(loginSuccessfull(false));
    }

    return (
        <div className="header">
            <Link to={"/"}  className="link">Home</Link>
            <button onClick={logout} className="button">Logout</button>
        </div>
    )
}