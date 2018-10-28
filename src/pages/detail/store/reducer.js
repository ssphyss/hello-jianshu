import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	title: '“寂静”的宇宙',
	content: '<img src="http://upload-images.jianshu.io/upload_images/12961714-3318dd46510b0806.jpg"/><p>111曾幾何時啊，我們每個人都想過我們的世界究竟在哪，地球之外又是什麼，我們究竟又是怎樣地存在。從138.2億年前的宇宙大爆炸開始，經過了百億年的冷卻才創就出了我們現在所觀測出的宇宙，瑰麗的星雲，獨一無二的星球，更多的是它那令人費解卻又不可思議的運行法則，例如三星系統，四星系統，五星系統，六星系統……當然也有更為壯麗的運行系統，你可以將它想像成如同三體中的那樣……</p>'
})

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.CHANGE_DETAIL:
			return state.merge({
				title: action.title,
				content: action.content
			})
		default :
			return state;
	}
}
