import * as constants from './constants';
// import { fromJS } from 'immutable';
import axios from 'axios';

const changeDetail = (title, content ) => ({
    type: constants.CHANGE_DETAIL,
    title,
    content
})

// id 文章編號
// 1.
export const getDetail = (id = 0) => {
    return (dispatch) => {
        console.log('獲取Ajax連結a');        
        let url = '';
        if (id) {
            url = `/api/detail.json`
            // url = `https://easy-mock.com/mock/5bc846bd4ff7d608864c06b0/jianshuApi/searchMenuPage?page=${page}&&pageItems=${pageItems}`
        }else{
            url = `/api/detail.json`
            // url = 'https://easy-mock.com/mock/5bc846bd4ff7d608864c06b0/jianshuApi/searchMenuPage?page=1&&pageItems=15'
        }        
        // axios.get('https://easy-mock.com/mock/5bc846bd4ff7d608864c06b0/jianshuApi/searchMenuPage')
        axios.get(url)
        .then((res)=>{           
			console.log('Ajax輸出：',res.data);
            const result = res.data.data;
            dispatch(changeDetail(result.title, result.content));
		})
		.catch(()=>{alert('err')})
    }
}

// export const searchFocus = () => ({
//     type: constants.SEARCH_FOCUS
// })

// export const searchBlur = () => ({
//     type: constants.SEARCH_BLUR
// })

// // 可以接收到page的新頁碼 page,把page傳給reducer
// // 讓reducer接收到action時,也得到action.page
// export const changePage = (page) => ({
//     type: constants.CHANGE_PAGE,
//     page
// })
