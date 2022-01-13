import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESSFULL } from "./actionTypes";

const init = { loading: false, token: false, error: false };

export const reducer = (state = init, {type, payload}) => {
    switch(type) {
        case LOGIN_LOADING:
            return {
                ...state,
                loading: true,
            };

        case LOGIN_SUCCESSFULL:
                return {
                    ...state,
                    token: payload,
                    loading: false,
            }
            
        case LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            };

        default:
            return state;
    }
}