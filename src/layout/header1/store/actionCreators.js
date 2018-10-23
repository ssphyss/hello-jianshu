import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

// import { 
//     SEARCH_FOCUS,
//     SEARCH_BLUR
// } from './actionTypes';

// 封裝action
export const searchFocus = () => ({
    // type: 'search_focus'
    type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
    // type: 'search_blur'
    type: constants.SEARCH_BLUR
})

const changeList = (data) => ({
    // type: 'change_list',
    type: constants.CHANGE_LIST,
    data: fromJS(data)
})

export const getList = () => {
    return (dispatch) => {
        console.log('AAA');
        axios.get('https://easy-mock.com/mock/5bc846bd4ff7d608864c06b0/jianshuApi/todolistAntd')
		.then((res)=>{
			console.log('Ajax輸出：',res.data);
            const data = res.data;
            // const action = {
            //     type: 'change_list',
            //     data: data.data
            // }
            // dispatch(action);
            // const action = changeList(data.data);
            dispatch(changeList(data.data));
		})
		.catch(()=>{alert('err')})
    }
}


