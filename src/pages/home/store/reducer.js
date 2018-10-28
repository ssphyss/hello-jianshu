import { fromJS } from 'immutable';
import * as constants from './constants';

// 把數據對象轉化成immutable對象
const defaultState = fromJS({	
	topicList: [],
	listArticle:[],
	listArticlePage: 1,
	recommendList:[],
	writerList: [],
	showScroll: false
});

const changeHomeData = (state, action) => {
	console.log('action：', action)
	return state.merge({
		topicList:  fromJS(action.topicList),
		listArticle:  fromJS(action.listArticle),
		recommendList:  fromJS(action.recommendList),
		writerList:  fromJS(action.writerList),
	});
}

const addHomeData = (state, action) => {
	console.log('action：', action)	
	return state.merge({
		listArticle:  state.get('listArticle').concat(action.list),
		listArticlePage: action.nextPage
	});
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case constants.CHANGE_HOME_DATA :
			return changeHomeData(state, action);
		case constants.ADD_HOME_DATA :
			return addHomeData(state, action);
		case constants.TOGGLE_SCROLL_TOP :
			return state.set('showScroll', action.show);
		default: 
			return state;
	}
}