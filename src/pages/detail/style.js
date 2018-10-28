import styled from 'styled-components';

/**
 * Detail
 */

export const BackTop = styled.a`
    position: fixed;
    right: 81px;
    bottom: 100px;
    padding: 11px 14px;
    border: 1px solid #9E9E9E;
    transform: rotate(-90deg);
    color: #9E9E9E;
`;

export const DetailWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
    // background: yellow;
`;

export const __Left = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`;

export const __Right = styled.div`
    float: right;
    width: 240px;
    padding-top: 30px;
`;

export const __Header = styled.div`
    margin: 20px 0 20px 0;
    font-size: 34px;
    font-weight: bold;
    line-height: 44px;
    color: #333;    
`;


export const __Content = styled.div`
    margin: 50px 0 20px 0;
    font-size: 16px;
    line-height: 30px;
    color: #2f2f2f;    
    img {
        width: 100%;
    }
`;