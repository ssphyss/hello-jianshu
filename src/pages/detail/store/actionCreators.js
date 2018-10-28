import * as constants from './constants';
import axios from 'axios';

const changeDetail = (title, content ) => ({
    type: constants.CHANGE_DETAIL,
    title,
    content
})

// 1. id 文章編號
export const getDetail = (id = 0) => {
    return (dispatch) => {
        console.log('獲取Ajax連結a');        
        let url = `/api/detail.json?id=${id}` 
        // url = `/api/detail.json?id=` + id
        // url = `https://easy-mock.com/mock/5bc846bd4ff7d608864c06b0/jianshuApi/searchMenuPage?page=${page}&&pageItems=${pageItems}`            
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
