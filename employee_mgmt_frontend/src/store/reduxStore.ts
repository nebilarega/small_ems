import { createStore, applyMiddleware, compose } from "redux";
import EmployeeMangeMentReducer from "../reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  EmployeeMangeMentReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
