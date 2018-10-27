// import { combineReducers } from  'redux';
// 引用 redux-immutable 彙整其他的 reducer
import { combineReducers } from  'redux-immutable';
import { reducer as headerReducer } from './../layout/header1/store';
import { reducer as topReducer } from './../layout/top/store';
import { reducer as topStateReducer } from './../layout/topState/store';
import { reducer as homeReducer } from './../pages/home/store';

const reducer = combineReducers ({
	header : headerReducer,
	top : topReducer,
	topState : topStateReducer,
	home: homeReducer
})
export default reducer;

// export default combineReducers ({
// 	header : headerReducer
// })
// const defaultState = {
//     focused: false
// }

// export default (state = defaultState, action) => {
// 	if (action.type === 'search_focus') {
// 		return {
// 			focused: true
// 		}
// 	}
// 	if (action.type === 'search_blur') {
// 		return {
// 			focused: false
// 		}
// 	}
// 	return state;
// }



// // 筆記本：預設資料空白
// // 筆記本：紀錄存取如何操作的內容和數據，傳給store
// // 筆記本：接收兩個參數內容state, action 
// // 返回一個函數,預設是返回state
// // state 整個圖書館裡所有書籍的訊息.數據
// // 讓預設數據是空的
// const defaultState = {}
// export default (state = defaultState, action) => {
//     return state;
// }