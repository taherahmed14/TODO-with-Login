import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginError, loginLoading, loginSuccessfull } from "../features/login/actions";
import "./Login.css"

export const Login = () => {
    const [form, setForm] = useState({});

    const dispatch = useDispatch();

    const { loading, token, error } = useSelector((state) => ({
        loading: state.loginState.loading,
        token: state.loginState.token,
        error: state.loginState.error
    }));

    const handleChange = ({target: {name, value}}) =>{
        setForm({ 
            ...form,
            [name]: value,
        });
    };

    const checkCredentials = () => {
        dispatch(loginLoading());
        fetch("https://reqres.in/api/register", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(form)
        })

        .then((d) => d.json())
        .then((res) => {
            if(res.token){
                dispatch(loginSuccessfull(true));
            }
            else{
                alert("Enter correct credentials");
            }
        })
        .catch((err) => {
            //console.log(err);
            dispatch(loginError());
        });
    };

    if(token){
        return <Navigate to={"/"} />
    }

    return (
        <div>
            <div className="loginBox">
                <h2>Signin</h2>
                <input name="email" onChange={handleChange} type="text" placeholder="Enter Email" className="input" />
                <input name="password" onChange={handleChange} type="text" placeholder="Enter Password" className="input" />
                <button onClick={checkCredentials}>Login</button>
            </div>
        </div>
    )
};