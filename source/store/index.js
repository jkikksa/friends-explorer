import logger from 'redux-logger';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {routerMiddleware} from 'react-router-redux';

import reducer from '../reducers';
import {history} from '..';
import initialState from './state';

const router = routerMiddleware(history);
const middlewares = [promise, thunk, router];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

const store = createStore(reducer, initialState, applyMiddleware(...middlewares));

export default store;
