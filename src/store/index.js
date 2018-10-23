import { createStore } from 'redux';
import reducer from './reducer';
// 使用中間件Redux-thunk 引入
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// // 2.=============== 使用中間件 Redux-thunk  ===============
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);
const store = createStore(reducer, enhancer);

export default store;
