import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { league, results, contestants } from './reducers/index';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({ league, results, contestants });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer, compose(applyMiddleware(thunk)));
  let persistor = persistStore(store);
  return { store, persistor };
};
