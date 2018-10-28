import React from 'react';
import { 
    DetailWrapper, 
    BackTop,
    __Left,
    __Right,
    __Header,
    __Content
} from './style';

export default class Detail extends React.Component{
    render(){
        return(
            <DetailWrapper>
                <__Left>
                    <__Header>“寂静”的宇宙</__Header>
                    <__Content>
                        <img src='http://upload-images.jianshu.io/upload_images/12961714-3318dd46510b0806.jpg'/>
                        <p>
                            曾幾何時啊，我們每個人都想過我們的世界究竟在哪，
                            地球之外又是什麼，我們究竟又是怎樣地存在。
                            從138.2億年前的宇宙大爆炸開始，經過了百億年的冷卻才創就出了我們現在所觀測出的宇宙，
                            瑰麗的星雲，獨一無二的星球，更多的是它那令人費解卻又不可思議的運行法則，
                            例如三星系統，四星系統，五星系統，六星系統……當然也有更為壯麗的運行系統，
                            你可以將它想像成如同三體中的那樣……
                        </p>
                    </__Content>    
                </__Left>
                <__Right>
                    <img src='http://cdn2.jianshu.io/assets/web/web-note-ad-side-banner-22096669b4c4b91c3b9266894e951aef.png'/>
                </__Right>
                            
            </DetailWrapper>
        )
    }
}