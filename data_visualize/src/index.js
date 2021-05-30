import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "antd/dist/antd.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { themeReducer } from "./redux/reducers/theme";

const store = createStore(themeReducer);

// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
