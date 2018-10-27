import React from 'react';

// import './style.js';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';

import logoPic from '../../assets/banner.png';

import HomeDownloadApp from './../../components/HomeDownloadApp';
import HomeList from './../../components/HomeList';
import HomeRecommend from './../../components/HomeRecommend';
import HomeTopic from './../../components/HomeTopic';
import HomeWriter from './../../components/HomeWriter';


export default class Home extends React.Component{
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
}