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


// // 1.從redux引入一個createStore方法
// // 2.引入筆記本
// // 3.調用這個方法定義一個store,公共的數據存儲倉庫
// //   把筆記本當成第一個參數,傳給store
// // 4.導出
// import { createStore } from 'redux';
// import reducer from './reducer';
// const store = createStore(reducer);
// export default store;