import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import weatherReducer from "./store/weatherStore/weatherStore";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const reducer = combineReducers({
  weatherReducer,
});
const store = createStore(reducer, composedEnhancer);

export default store;
