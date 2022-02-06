import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import students from './reducers/students';

const rootReducer = combineReducers({ students });

// just to learn the functionality of thunk
const thunk = store => next => action => {
  if (typeof action === 'function') {
    action(store.dispatch, store.getState);
  } else {
    return next(action);
  }
};

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, composedEnhancer);

export default store;
