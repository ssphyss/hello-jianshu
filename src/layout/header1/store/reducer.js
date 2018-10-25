import * as constants from './constants';
import { fromJS } from 'immutable';

// 把數據對象轉化成immutable對象
// 裡面的list數組也會同時變成immutable數組
const defaultState = fromJS({
	focused: false,
	list: [],
	page: 1,
	totalPage: 1,
	mouseIn: false
})

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.SEARCH_FOCUS :
			// return { focused: true }
			return state.set('focused', true);

		case constants.SEARCH_BLUR :
			return state.set('focused', false);

		case constants.CHANGE_LIST :
			console.log('這裡是reducer：test收到');
			console.log('reducer收到action：',action);
			// return state.set('list', action.data);
			// return state.set('list', action.data).set('totalPage', action.totalPage);
			// 用merge可以多個改變
			return state.merge({
				list: action.data,
				totalPage: action.totalPage
			})
		case constants.MOUSE_ENTER :
			return state.set('mouseIn', true);
		
		case constants.MOUSE_LEAVE :
			return state.set('mouseIn', false);
		
		// 替換成新的頁碼action.page
		case constants.CHANGE_PAGE :
			return state.set('page', action.page);
			
		default :
			return state;
	}
}


// const defaultState = {
//     focused: false,
// 	list: []
// }

// export default (state = defaultState, action) => {
// 	if (action.type === constants.SEARCH_FOCUS) {
		
// 		// 引入immutable
// 		// immutable對象的set方法,會結合之前的immutable對象的值
// 		return state.set('focused', true);
// 		// return { focused: true }
// 	}
// 	if (action.type === constants.SEARCH_BLUR) {
// 		return state.set('focused', false);
// 		// return { focused: false }
// 	}
// 	if (action.type === constants.CHANGE_LIST) {
// 		return state.set('list', action.data)
// 		// console.log('有連了嗎?');
// 		// console.log(action)
// 		// return state;
// 	}
// 	return state;
// }