import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk"; //tiene la capacidad de hacer las request

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,  //este es el reducer
    composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;