import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { league, results, contestants } from './reducers/index';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({ league, results, contestants });

export default createStore(rootReducer, compose(applyMiddleware(thunk)));
