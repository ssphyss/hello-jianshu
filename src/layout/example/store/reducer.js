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
