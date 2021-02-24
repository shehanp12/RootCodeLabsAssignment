import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import postReducer from "./reducers/postReducer";
import thunk from "redux-thunk";

const middleware = thunk;
const initialState = {};

const rootReducer = combineReducers({
    posts:postReducer
});


export default createStore(rootReducer, initialState, compose(applyMiddleware(middleware)));
