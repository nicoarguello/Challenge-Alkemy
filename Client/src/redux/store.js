import { createStore, compose, applyMiddleware } from "redux";
import  rootReducer  from "./reducers";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : noop => noop,)
);

export default store;