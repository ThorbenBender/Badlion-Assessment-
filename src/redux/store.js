import { createStore, combineReducers } from 'redux';
import { league } from './reducers/index';

const rootReducer = combineReducers({ league });

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
