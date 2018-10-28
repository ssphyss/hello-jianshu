import styled from 'styled-components';

/**
 * Login
 */

export const LoginWrapper = styled.div`
    z-index: 0;
    position: absolute;
    left: 0;
    right: 0;
    top: 56px;
    bottom: 0;
    background: #eee;
`;

export const LoginBox = styled.div`
    width: 400px;
    height: 250px;
    margin: 80px auto;
    background: #fff;
    padding-top: 20px;
    // border: 1px solid;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
`;

export const Input = styled.input`
    display: block;
    width: 200px;
    height: 30px;
    line-height: 30px;
    margin: 10px auto;
    padding: 0 10px;
    color: #777;
`;

export const Button = styled.div`
    margin: 10px auto;
    width: 220px;
    height: 30px;
    line-height: 30px;    
    background: #333;
    color: #fff;
    text-align: center;
    border-radius: 100px;
`;
