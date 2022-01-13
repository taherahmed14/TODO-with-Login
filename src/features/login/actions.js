import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESSFULL } from "./actionTypes";

export const loginLoading = () => {
    return {
        type: LOGIN_LOADING,
    }
};

export const loginSuccessfull = (data) => {
    return {
        type: LOGIN_SUCCESSFULL,
        payload: data,
    }   
};

export const loginError = () => {
    return {
        type: LOGIN_ERROR,
    }
};