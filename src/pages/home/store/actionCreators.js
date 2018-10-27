import * as constants from './constants';
// import { CHANGE_HOME_DATA } from './actionTypes';
import axios from 'axios';

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


