import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer as loginReducer } from "../features/login/reducer";
import { reducer as todoReducer } from "../features/todos/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    loginState: loginReducer,
    todoState: todoReducer
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__());