import * as DevTools from "redux-devtools-extension";

import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import { ExtendedStore } from "./types.d";

import rootReducer, { InitialState } from "./reducer";
import rootSaga from "./index/saga";

const bindMiddleware = (middleware: any[]) => {
  if (process.env.NODE_ENV !== "production") {
    return DevTools.composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore(initialState = InitialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
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
