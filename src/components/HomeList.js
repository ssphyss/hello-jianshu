import React from 'react';
// 1.connect
import { connect } from 'react-redux';
import { ListItem, InfoBox, ListInfo, ListMeta, MetaItem, LoadMore } from './style';
// import list01 from './../assets/list/list01.jpg';
// 6.
import { actionCreators } from './../pages/home/store';

class HomeList extends React.Component{
    render(){
        // const { list } = this.props;
        return(
            <div>
                {
                    this.props.list.map((item, index)=>{
                        return(
                            <ListItem key={/*item.get('id')*/ index}>                            
                                <InfoBox>
                                    <img className='pic' src={item.get('imgUrl')} alt=""/>
                                    <ListInfo>
                                        <a className='title' href='https://www.google.com.tw/'>{item.get('title')}</a>
                                        <p className='desc'>{item.get('desc')}
                                        </p>
                                    </ListInfo>
                                </InfoBox>                
                                <ListMeta>
                                    <MetaItem>grain先森</MetaItem>
                                    <MetaItem>回應123</MetaItem>
                                    <MetaItem>喜愛456</MetaItem>
                                </ListMeta>
                            </ListItem>
                        )
                    })
                }
                <LoadMore
                    // 5.
                    onClick={this.props.getMoreList}
                >閱讀更多
                </LoadMore>
            </div>
            // <ListItem>
            //     <InfoBox>
            //         <img className='pic' src={list01} alt=""/>
            //         <ListInfo>
            //             <a className='title' href='https://www.google.com.tw/'>前端-不要再問跨域的問題了</a>
            //             <p className='desc'>跨域這兩個字就像一塊狗皮膏藥一樣黏在每一個前端開發者身上，
            //                 無論你在工作上或者面試中無可避免會遇到這個問題。
            //                 為了應付面試，我每次都隨便背幾個方案，
            //                 也不知道為什麼要這樣幹，反正面完就可以扔了，
            //                 我想工作上也不會用到那麼多亂七八糟的方
            //             </p>
            //         </ListInfo>
            //     </InfoBox>                
            //     <ListMeta>
            //         <MetaItem>grain先森</MetaItem>
            //         <MetaItem>回應123</MetaItem>
            //         <MetaItem>喜愛456</MetaItem>
            //     </ListMeta>
            // </ListItem>
        )
    }
}

// 3.
const mapState = (state) => {
	return {
        // list: state.get('home').get('listArticle')
        list: state.getIn(['home','listArticle'])
	}
}

// 4.
const mapDispath = (dispatch) => {
	return {
		getMoreList() {
            console.log('123getMoreList')
            // 7.
            dispatch(actionCreators.getMoreList())
		},
	}
}

// 2.
export default connect(mapState, mapDispath)(HomeList);