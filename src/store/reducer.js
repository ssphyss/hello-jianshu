// import { combineReducers } from  'redux';
// 引用redux-immutable
import { combineReducers } from  'redux-immutable';

import { reducer as headerReducer } from './../layout/header1/store';
// import headerReducer from './../layout/header1/store/reducer';

const reducer = combineReducers ({
	header : headerReducer
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