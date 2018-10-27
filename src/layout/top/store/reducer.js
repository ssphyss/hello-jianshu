import * as constants from './constants';
import { fromJS } from 'immutable';

// 把數據對象轉化成immutable對象
const defaultState = fromJS({
	focused: false,
	list: [],
	page: 1,
	totalPage: 1,
	mouseIn: false
})

export default (state = defaultState, action) => {
	switch(action.type) {
		// 移入Input聚焦
		case constants.SEARCH_FOCUS :
			return state.set('focused', true);
		
		// 移出Input聚焦
		case constants.SEARCH_BLUR :
			return state.set('focused', false);
		
		// 改變清單	
		case constants.CHANGE_LIST :
			return state.set('list', action.data).set('totalPage', action.totalPage);
		
		// 移入搜尋框顯示區域
		case constants.MOUSE_ENTER :
			// console.log('reducer顯示:')
			return state.set('mouseIn', true);
		
		// 移出搜尋框顯示區域
		case constants.MOUSE_LEAVE :
			return state.set('mouseIn', false);
		
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