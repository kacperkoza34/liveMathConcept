import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";

const initialState = {
  state: {
    page: 0,
    position: 0,
    articleHeigth: 0
  }
};

const reducers = {
  state: reducer
};

const combinedReducers = combineReducers(reducers);

const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools()
);

export default store;
