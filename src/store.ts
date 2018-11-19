// store is declared separately, since it is required by tests

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import configReducer from './reducers';

// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ should be overriden for Typescript
// so composeWithDevTools is used instead

export const store = (initialState = {}) => createStore(
  combineReducers({
    config: configReducer,
  }),
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);
