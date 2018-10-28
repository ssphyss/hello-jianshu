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

export default (state = defaultState, action) => {
	switch (action.type) {
		// 'change_home_data'
		case constants.CHANGE_HOME_DATA :
			console.log('action：', action)
			// state.set('topList', fromJS(action.topicList))
			// state.set('topList', fromJS(action.listArticle))
			// state.set('topList', fromJS(action.recommendList))
			// state.set('topList', fromJS(action.writerList))
			return state.merge({
				topicList:  fromJS(action.topicList),
				listArticle:  fromJS(action.listArticle),
				recommendList:  fromJS(action.recommendList),
				writerList:  fromJS(action.writerList),
			});
		case constants.ADD_HOME_DATA :
			// return state.set('listArticle', state.get('listArticle').concat(action.list))
			return state.merge({
				listArticle:  state.get('listArticle').concat(action.list),
				listArticlePage: action.nextPage
			});
		case constants.TOGGLE_SCROLL_TOP :
			return state.set('showScroll', action.show);
		default: 
			return state;
	}
}