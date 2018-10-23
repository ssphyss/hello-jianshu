// import * as constants from './constants';
import { fromJS } from 'immutable';
import topic01 from './../../../assets/topic01.jpg';
// import topic02 from './../../../assets/topic02.jpg';
// import topic03 from './../../../assets/topic03.jpg';
// import topic04 from './../../../assets/topic04.jpg';
// import topic05 from './../../../assets/topic05.jpg';
// import topic06 from './../../../assets/topic06.jpg';

// 把數據對象轉化成immutable對象
const defaultState = fromJS({
	topicList: [
		{
			id: 1,
			title: '繪本',
			imgUrl: {topic01}
		},
		{
			id: 2,
			title: '區塊鏈',
			imgUrl: './../../../../assets/topic02.jpg'
		},
		{
			id: 3,
			title: '故事',
			imgUrl: './../../../assets/topic03.jpg'
		},
		{
			id: 4,
			title: '讀書',
			imgUrl: './../../../assets/topic04.jpg'
		},
		{
			id: 5,
			title: '自然科普',
			imgUrl: './../../../assets/topic05.jpg'
		},
		{
			id: 6,
			title: '攝影',
			imgUrl: './../../../assets/topic06.jpg'
		}
	]
});

// const defaultState = {
//     focused: false
// }

export default (state = defaultState, action) => {
	switch (action.type) {
		default: 
			return state;
	}
}