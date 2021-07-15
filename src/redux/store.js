import { createStore, applyMiddleware } from 'redux';
import {persistStore} from 'redux-persist';
import logger from 'redux-logger'; //nice to use when debugging our redux code

import rootReducer from './rootReducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);


