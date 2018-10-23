import * as constants from './constants';
import { fromJS } from 'immutable';

// 把數據對象轉化成immutable對象
const defaultState = fromJS(
	{
		focused: false
	}
)

// const defaultState = {
//     focused: false
// }

export default (state = defaultState, action) => {
	if (action.type === constants.SEARCH_FOCUS) {
		
		// 引入immutable
		// immutable對象的set方法,會結合之前的immutable對象的值
		return state.set('focused', true);
		// return {
		// 	focused: true
		// }
	}
	if (action.type === constants.SEARCH_BLUR) {
		return state.set('focused', false);
		// return {
		// 	focused: false
		// }
	}
	return state;
}