import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { initializeStore } from "./store";
import { Provider } from "react-redux";
import {BrowserRouter as Router, Route} from 'react-router-dom' 
import Login from './pages/Login'
import Home from './pages/Home'
import Pokemon from './pages/Pokemon'

const store = initializeStore();
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path='/login' component={Login} />
      <Route exact path='/pokemon' component={Pokemon} />
      <Route exact path='/' component={Home} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
