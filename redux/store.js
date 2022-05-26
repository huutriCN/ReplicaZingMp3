// libs
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
// reducers
import rootReducer from "./reducers/index";
// redux Dev Tools
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const configureStore = () => {
  const middlewares = [thunk];
  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(rootReducer, composeEnhancers(...enhancers));

  return store;
};
export default createWrapper(configureStore);
