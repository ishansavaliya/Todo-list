import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

import { todosReducers } from "./reducers/todosReducer";
import { tabReducer } from "./reducers/tabReducers";

const reducer = combineReducers({
  todos: todosReducers,
  currentTab: tabReducer,
});

// Apply middleware properly
const middleware = [thunk];
const composeEnhancers = composeWithDevTools({});

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
