import { ADD_TODO, REMOVE_TODO, ADD_TODO_LOADING, ADD_TODO_SUCCESS,
        ADD_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, GET_TODO_ERROR,
        DELETE_TODO, 
        DELETE_TODO_LOADING,
        DELETE_TODO_SUCCESS,
        DELETE_TODO_ERROR,
        UPDATE_TODO_LOADING,
        UPDATE_TODO_SUCCESS,
        UPDATE_TODO_ERROR,
        PENDING_TODO_LOADING,
        PENDING_TODO_SUCCESS,
        PENDING_TODO_ERROR,
        EDIT_TODO_LOADING,
        EDIT_TODO_SUCCESS,
        EDIT_TODO_ERROR } from "./actionTypes";

const init = { loading: false, todos: [], error: false };
export const reducer = (state = init, {type, payload}) => {
    switch(type){
        case ADD_TODO:
            return {
                ...state, 
                //counter: state.counter + payload,
                todos: [...state.todos, payload],
            };

        case ADD_TODO_LOADING:
            return {
                ...state, 
                loading: true
            }
        
        case ADD_TODO_SUCCESS:
            return {
                ...state, 
                todos: [...state.todos, payload],
                loading: false
            }

        case ADD_TODO_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }

        case GET_TODO_LOADING:
            return {
                ...state, 
                loading: true
            }

        case GET_TODO_SUCCESS:
            return {
                ...state, 
                todos: payload,
                loading: false
            }

        case GET_TODO_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }

        case DELETE_TODO_LOADING:
            return {
                ...state, 
                loading: true
            }
            
        case DELETE_TODO_SUCCESS:
            return {
                ...state, 
                todos: [...state.todos, payload],
                loading: false
            }

        case DELETE_TODO_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }

        case UPDATE_TODO_LOADING:
            return {
                ...state, 
                loading: true
            }
            
        case UPDATE_TODO_SUCCESS:
            return {
                ...state, 
                todos: [...state.todos, payload],
                loading: false
            }

        case UPDATE_TODO_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }

        case PENDING_TODO_LOADING:
            return {
                ...state, 
                loading: true
            }

        case PENDING_TODO_SUCCESS:
            return {
                ...state, 
                todos: payload,
                loading: false
            }

        case PENDING_TODO_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }

        case EDIT_TODO_LOADING:
            return {
                ...state, 
                loading: true
            }
            
        case EDIT_TODO_SUCCESS:
            return {
                ...state, 
                todos: [...state.todos, payload],
                loading: false
            }

        case EDIT_TODO_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }

        default:
            return state;
    }
}