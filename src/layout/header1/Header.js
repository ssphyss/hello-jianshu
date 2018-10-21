import React from 'react';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button
} from './style'
;

export default class Header extends React.Component{
    render(){
        return(
            <HeaderWrapper>
                <Logo/>
                <Nav>
					<NavItem className='left active'>首頁</NavItem>
					<NavItem className='left'>下載App</NavItem>
					<NavItem className='right'>登陸</NavItem>
					<NavItem className='right'>
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<SearchWrapper>
                        <NavSearch></NavSearch>
					</SearchWrapper>
				</Nav>
                <Addition>
					<Button className='writting'>
						<i className="iconfont">&#xe615;</i>
						寫文章
					</Button>
					<Button className='reg'>注册</Button>
				</Addition>
            </HeaderWrapper>
        )
    }
}