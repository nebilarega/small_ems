import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from './App';
import { Dashboard } from "./Dashboard";
import { Provider } from "react-redux";
import reduxStore from "./store/reduxStore";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
