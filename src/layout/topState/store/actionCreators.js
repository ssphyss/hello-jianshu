import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data, totalItems ) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    // 總共有幾頁
    // totalPage: Math.ceil(data.length / 10)
    // 總共幾頁：總筆數有123筆/15=9頁 
    totalPage: Math.ceil(totalItems / 15)
})

// page只現在第幾頁
// pageItems指一次要15筆
// totalItems指共有123筆,可以去算總共有幾頁
// totalPage指總共有9頁
// page為0表示未給值時,給他代0,確保沒有值代入會走else
export const getList = (page = 0, pageItems = 0) => {
    return (dispatch) => {
        console.log('新的page：',page);
        // console.log('獲取Ajax連結');
        let url = '';
        if (page && pageItems) {
            url = `https://easy-mock.com/mock/5bc846bd4ff7d608864c06b0/jianshuApi/searchMenuPage?page=${page}&&pageItems=${pageItems}`
        }else{
            url = 'https://easy-mock.com/mock/5bc846bd4ff7d608864c06b0/jianshuApi/searchMenuPage?page=1&&pageItems=15'
        }        
        // axios.get('https://easy-mock.com/mock/5bc846bd4ff7d608864c06b0/jianshuApi/searchMenuPage')
        axios.get(url)
        .then((res)=>{           
            console.log('Ajax輸出：',res.data);
            console.log('Ajax的page：',page);
            const data = res.data;
            // const action = changeList(data.data);
            // dispatch(action);
            // 一次給我15筆資料,也告訴我總筆數有123筆,為了讓我可以做分頁
            dispatch(changeList(data.data, data.totalItems));
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

// 可以接收到page的新頁碼 page,把page傳給reducer
// 讓reducer接收到action時,也得到action.page
export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
})
