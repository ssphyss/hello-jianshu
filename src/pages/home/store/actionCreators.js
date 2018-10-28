import * as constants from './constants';
import { fromJS } from 'immutable';  
// 或 import { List } from 'immutable';
import axios from 'axios';


/**
 * 異步
 */
// 方法2
const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    listArticle: result.listArticle,
    recommendList: result.recommendList,
    writerList: result.writerList
})

export const getHomeInfo = () => {
    return(dispatch) => {
        axios('./api/home.json').then((res)=>{
            console.log(res)
            const result = res.data.data;
            // const action = changeHomeData(result) 
            // dispatch(action) 
            dispatch(changeHomeData(result))
        })
    }
}

// 方法1
// export const getHomeInfo = () => {
//     return(dispatch) => {
//         axios('./api/home.json').then((res)=>{
//             console.log(res)
//             const result = res.data.data;
//             const action = {
//                 type: 'change_home_data',
//                 topicList: result.topicList,
//                 listArticle: result.listArticle,
//                 recommendList: result.recommendList,
//                 writerList: result.writerList
//             }
//             // 11.
//             dispatch(action)
//         })
//     }
// }


/**
 * getMoreList
 */

const addHomeData = (list, nextPage) => ({
    type: constants.ADD_HOME_DATA,
    list: fromJS(list),   // 也可以寫成 list: List(list) 都會轉成immutable數組
    nextPage
})
// export const getMoreList = () => {
//     return(dispatch) => {
//         console.log('AAABBB')
//         axios('./api/homeList.json').then((res)=>{
//             console.log(result)
//             const result = res.data.data;
//             // const action = addHomeData(result) 
//             // dispatch(action) 
//             dispatch(addHomeData(result))
//         })
//     }
// }

// 有帶頁碼
export const getMoreList = (page) => {
    return(dispatch) => {
        console.log('AAABBB')
        axios('./api/homeList.json?page' + page).then((res)=>{
            console.log(res);
            const result = res.data.data;
            // const action = addHomeData(result) 
            // dispatch(action) 
            dispatch(addHomeData(result, page + 1))
        })
    }
}

/**
 * 
 */

export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_SCROLL_TOP,
    show
})