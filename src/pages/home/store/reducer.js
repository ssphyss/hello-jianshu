// import * as constants from './constants';
import { fromJS } from 'immutable';

import topic01 from './../../../assets/topic01.jpg';
import topic02 from './../../../assets/topic02.jpg';
import topic03 from './../../../assets/topic03.jpg';
import topic04 from './../../../assets/topic04.jpg';
import topic05 from './../../../assets/topic05.jpg';
import topic06 from './../../../assets/topic06.jpg';
import list01 from './../../../assets/list/list01.jpg';
import list02 from './../../../assets/list/list02.jpg';
import list03 from './../../../assets/list/list03.jpg';
import recommend01 from './../../../assets/recommend/recommend01.png';
import recommend02 from './../../../assets/recommend/recommend02.png';
import recommend03 from './../../../assets/recommend/recommend03.png';
import recommend04 from './../../../assets/recommend/recommend04.png';
import recommend05 from './../../../assets/recommend/recommend05.png';


// 把數據對象轉化成immutable對象
const defaultState = fromJS({
	recommendList:[
		{
			id: 1,			
			imgUrl: recommend01
		},
		{
			id: 2,			
			imgUrl: recommend02
		},
		{
			id: 3,
			imgUrl: recommend03
		},
		{
			id: 4,
			imgUrl: recommend04
		},
		{
			id: 5,
			imgUrl: recommend05
		}
	],
	listArticle:[
		{
			id: 1,
			title: '前端-不要再問跨域的問題了',
			desc: '跨域這兩個字就像一塊狗皮膏藥一樣黏在每一個前端開發者身上，無論你在工作上或者面試中無可避免會遇到這個問題。',
			imgUrl: list01
		},
		{
			id: 2,
			title: '不用學python，這個軟件幫你完成80%的數據採集工作',
			desc: '首先想要說的是，等你掌握了爬蟲軟件之後你就會發現自己簡直就是打開了新世界的大門！比如像我每週一都要寫週報，所有的數據都需要從不同的來源手動蒐集整理過',
			imgUrl: list02
		},
		{
			id: 3,
			title: '刻石山道行',
			desc: '山道崎嶇亂石生，溪流婉轉斗折行。潭水清澈纖毫現，泉流激石佩環鳴。',
			imgUrl: list03
		}
	],
	topicList: [
		{
			id: 1,
			title: '繪本',
			imgUrl: topic01
		},
		{
			id: 2,
			title: '區塊鏈',
			imgUrl: topic02
			// imgUrl: './../../../../assets/topic02.jpg'
		},
		{
			id: 3,
			title: '故事',
			imgUrl: topic03
			// imgUrl: './../../../assets/topic03.jpg'
		},
		{
			id: 4,
			title: '讀書',
			imgUrl: topic04
			// imgUrl: './../../../assets/topic04.jpg'
		},
		{
			id: 5,
			title: '自然科普',
			imgUrl: topic05
			// imgUrl: './../../../assets/topic05.jpg'
		},
		{
			id: 6,
			title: '攝影',
			imgUrl: topic06
			// imgUrl: './../../../assets/topic06.jpg'
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