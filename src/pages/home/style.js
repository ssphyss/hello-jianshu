import styled from 'styled-components';

/**
 * Home
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

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    float: right;
    width: 240px;
`;
