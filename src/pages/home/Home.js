import React from 'react';
// 4.
import { connect } from 'react-redux';
// import './style.js';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
// 1.
import axios from 'axios';

import logoPic from '../../assets/banner.png';

import HomeDownloadApp from './../../components/HomeDownloadApp';
import HomeList from './../../components/HomeList';
import HomeRecommend from './../../components/HomeRecommend';
import HomeTopic from './../../components/HomeTopic';
import HomeWriter from './../../components/HomeWriter';


class Home extends React.Component{
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img src={logoPic} alt=""/>
                    <HomeTopic>Topic</HomeTopic>
                    <HomeList>List</HomeList>
                </HomeLeft>
                <HomeRight>
                    <HomeRecommend>Recommend</HomeRecommend>
                    <HomeDownloadApp>DownloadApp</HomeDownloadApp>
                    <HomeWriter>Writer</HomeWriter>
                </HomeRight>
            </HomeWrapper>
        )
    }

    // 2.
    componentDidMount(){
        axios('./api/home.json').then((res)=>{
            console.log(res)
            const result = res.data.data;

            // 3.要改變數據時定義 action
            const action = {
                type: 'change_home_data',
                topicList: result.topicList,
                listArticle: result.listArticle,
                recommendList: result.recommendList,
                writerList: result.writerList
            }
            // 7.
            this.props.changeHomeData(action)
        })
    }
}

// 6.
const mapDispatch = (dispatch) => ({
    // 8.
    changeHomeData(action){
        dispatch(action)
    }
})

// 5.
export default connect(null, mapDispatch)(Home);