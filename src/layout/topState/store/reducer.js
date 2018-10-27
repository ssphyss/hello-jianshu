import * as constants from './constants';
import { fromJS } from 'immutable';

// 把數據對象轉化成 immutable 對象，避免不小心改到 state
const defaultState = fromJS({
	list: [],
	totalPage: 1,
})

export default (state = defaultState, action) => {
	switch(action.type) {
		
		// 改變清單	
		case constants.CHANGE_LIST :
			return state.set('list', action.data).set('totalPage', action.totalPage);
				
		// 替換成新的頁碼 action.page
		case constants.CHANGE_PAGE :
			// return state.set('page', 2);
			return state.set('page', action.page);
		
		default :
			return state;
	}
}

// export default (state = defaultState, action) => {
// 	if (action.type === constants.SEARCH_FOCUS) {

// 		// 引入immutable
// 		// immutable對象的set方法,會結合之前的immutable對象的值
// 		// 和設置的值.返回一個全新的對象
// 		return state.set('focused', true);

// 		// return {
// 		// 	focused: true
// 		// }
// 	}
// 	if (action.type === constants.SEARCH_BLUR) {

// 		return state.set('focused', false);

// 		// return {
// 		// 	focused: false
// 		// }
// 	}
// 	return state;
// }