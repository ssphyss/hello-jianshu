import * as constants from './constants';
import { fromJS } from 'immutable';

// 把數據對象轉化成immutable對象
const defaultState = fromJS({
	focused: false,
	list: []
})

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.SEARCH_FOCUS :
			return state.set('focused', true);
		case constants.SEARCH_BLUR :
			return state.set('focused', false);
		case constants.CHANGE_LIST :
			return state.set('list', action.data);
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