import React from 'react';

// import './style.js';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style'
import logoPic from '../../assets/banner.png';

import DownloadApp from './../../components/DownloadApp';
import List from './../../components/List';
import Recommend from './../../components/Recommend';
import Topic from './../../components/Topic';
import Writer from './../../components/Writer';


export default class Home extends React.Component{
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img src={logoPic} alt=""/>
                    <Topic>Topic</Topic>
                    <List>List</List>
                </HomeLeft>
                <HomeRight>
                    <Recommend>Recommend</Recommend>
                    <DownloadApp>DownloadApp</DownloadApp>
                    <Writer>Writer</Writer>
                </HomeRight>
            </HomeWrapper>
        )
    }
}