import styled from 'styled-components';

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border: 1px solid;
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
