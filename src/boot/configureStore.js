import AsyncStorage from '@react-native-async-storage/async-storage';

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import reducer from "../reducers";
import logger from 'redux-logger'
import devToolsEnhancer from 'remote-redux-devtools';


const persistConfig = {
  key: 'auth',
  storage:AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducer);
const analytics = () => (next) => (action) => {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: action.type,
    payload: action.payload,
  })

  return next(action)
}

const middlewares = [
  thunk,
  process.env.NODE_ENV !== 'production' && logger,
  analytics,
].filter(Boolean)

  const enhancer = compose(applyMiddleware(...middlewares))

  let store = createStore(persistedReducer, enhancer);
  let persistor = persistStore(store);

  export {store,persistor};

