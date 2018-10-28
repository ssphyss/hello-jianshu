import * as constants from './constants';
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
        }else{
            url = `/api/detail.json`           
        }        

        axios.get(url)
        .then((res)=>{           
			console.log('Ajax輸出：',res.data);
            const result = res.data.data;
            dispatch(changeDetail(result.title, result.content));
		})
		.catch(()=>{alert('err')})
    }
}
