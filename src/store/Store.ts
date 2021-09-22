import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './modules/rootReducer';

const middlewares = []


if (__DEV__) {
  const createDebugger = require("redux-flipper").default;
  middlewares.push(createDebugger());
} 


const store = createStore(rootReducer, applyMiddleware(...middlewares, thunk));

export default store;