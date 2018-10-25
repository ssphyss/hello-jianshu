import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data)
})

export const getList = () => {
    return (dispatch) => {
        console.log('AAA');
        axios.get('https://easy-mock.com/mock/5bc846bd4ff7d608864c06b0/jianshuApi/searchMenu')
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

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
})

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
})

export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
})