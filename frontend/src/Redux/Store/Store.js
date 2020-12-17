import { applyMiddleware, createStore } from "redux";
import rootReducer from "../Reducers/Reducers";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
