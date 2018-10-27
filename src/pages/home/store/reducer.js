import { fromJS } from 'immutable';
import * as constants from './constants';

// 把數據對象轉化成immutable對象
const defaultState = fromJS({	
	topicList: [],
	listArticle:[],
	recommendList:[],
	writerList: []
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
			})
		default: 
			return state;
	}
}