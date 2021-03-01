import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import postReducer from "./reducers/postReducer";
import thunk from "redux-thunk";
import counterReducer from "./reducers/counterReducer";

const middleware = thunk;
const initialState = {};

const rootReducer = combineReducers({
    counter:counterReducer,
    posts:postReducer,

});


export default createStore(rootReducer, initialState, compose(applyMiddleware(middleware)));
