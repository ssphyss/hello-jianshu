// import * as constants from './constants';
// import axios from 'axios';

// const changeLogin = () => ({
//     type: constants.CHANGE_LOGIN,
//     value: true
// })

// export const logout = () => ({
//     type: constants.LOGOUT,
//     value: false
// })

// export const login = (account, password) => {
//     return (dispatch) => {
//         // console.log('登入：',page);
//         console.log('登入Ajax連結');
//         // let url = `https://easy-mock.com/mock/5bc846bd4ff7d608864c06b0/jianshuApi/searchMenuPage?page=${page}&&pageItems=${pageItems}`;
//         let url = `/api/login.json?account=${account}&password=${password}`;
//         axios.get(url)
//         .then((res)=>{           
// 			console.log('Ajax輸出：',res.data);
//             const result = res.data.data;
//             if (result) {
//                 dispatch(changeLogin());
//             }else {
//                 alert('登入失敗')
//             }
// 		})
// 		.catch(()=>{alert('err')})
//     }
// }


