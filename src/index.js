import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";

import configureStore from "./store/configureStore";
import ErrorBoundary from "./components/ErrorBoundary";
import ScrollToTop from "./components/ScrollToTop";
import App from "./App";


const store = configureStore();
const rootElement = document.getElementById("root");

ReactDOM.render((
  <Provider store={store}>
    <ErrorBoundary>
      <Router>
        <ScrollToTop>
          <App/>
        </ScrollToTop>
      </Router>
    </ErrorBoundary>
  </Provider>
), rootElement);