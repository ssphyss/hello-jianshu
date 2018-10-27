import styled from 'styled-components';
import Recommend01 from './../assets/recommend/recommend01.png';

/**
 * HomeTopic
 */
export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 40px 0 30px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    margin-left: 18px;
    margin-bottom: 18px;
    padding-right: 10px;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #777;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic {
        margin-right: 10px;        
        display: block;
        float: left;
        width: 32px;
        height: 32px;  
    }
`;

export const More = styled.a`
    display: inline-block;
    margin-left: 18px;
    font-size: 12px;
    height: 32px;
    line-height: 32px;
    color: #999;
`;

/**
 * HomeList
 */

export const ListItem =styled.div`
    border-bottom: 1px solid #dcdcdc;
    
`
export const InfoBox =styled.div`
    display: block;
    overflow: hidden;
    padding: 20px 0;
    .pic {
        display: block;
        width: 100px;
        height: 100px;
        float: right;
        margin-left: 20px;
        border-radius: 10px;
    }
`
export const ListInfo =styled.div`
    width: 500px;
    float: left;
    .title {
        display: block;
        margin-bottom: 10px;  
        font-size: 18px;
        line-height: 27px;
        font-weight: bold;
    }
    .desc {
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`

export const ListMeta =styled.div`
    display: block;
    padding: 8px 0;
`

export const MetaItem =styled.span`
    display: inline-block;
    margin-right : 20px;
`

export const LoadMore =styled.a`
    display: block;
    margin: 30px 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff
`

/**
 * HomeRecommend
 */

export const HomeRecommendWrapper =styled.div`
    margin : 30px 0;
    width: 280px;
`

export const RecommendItem =styled.div`
    width: 280px;
    height: 50px;
    // background: url(${Recommend01});
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`

/**
 * HomeWriter
 */

export const HomeWriterWrapper =styled.div`
    margin : 30px 0;
    width: 280px;
`
export const SearchInfoList =styled.div`

`
export const SearchInfoSwitch =styled.div`

`
export const SearchInfo =styled.div`

`
export const SearchInfoTitle =styled.div`

`
export const SearchInfoItem =styled.div`

`