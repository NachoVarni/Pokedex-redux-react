import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import {pokeLogin} from './reducers/pokeLogin'
import { secondCounter } from "./reducers/secondCounter";

const InitialState = {};



export const changeUserInfo = (userData) => (dispatch) => {
  return dispatch({
    type: "CHANGE_USER_INFO",
    userData
  });
};


export function initializeStore() {
  return createStore(
    combineReducers({ pokeLogin, secondCounter }),
    InitialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}