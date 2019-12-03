import * as DevTools from "redux-devtools-extension";
import "isomorphic-unfetch";

import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import { ExtendedStore } from "./types.d";

import rootReducer from "./reducer";
import rootSaga from "./saga";

const bindMiddleware = (middleware: any[]) => {
  if (process.env.NODE_ENV !== "production") {
    return DevTools.composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    bindMiddleware([sagaMiddleware])
  ) as ExtendedStore;

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  };

  // run the rootSaga initially
  store.runSagaTask();

  return store;
}

export default configureStore;
