import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; //nice to use when debugging our redux code

import rootReducer from './rootReducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export  default store;



