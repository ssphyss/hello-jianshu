import React from 'react';
import { CSSTransition } from 'react-transition-group';

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

class Header extends React.Component{
    constructor(props) {
		super(props);
		this.state = {
			focused: false
		}
		this.handleInputFocus = this.handleInputFocus.bind(this);
		this.handleInputBlur = this.handleInputBlur.bind(this);
	}
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
                        {/* <NavSearch></NavSearch> */}
                        <CSSTransition
							in={this.state.focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={this.state.focused ? 'focused': ''}
								onFocus={this.handleInputFocus}
								onBlur={this.handleInputBlur}
							></NavSearch>
						</CSSTransition>
                        <i className={this.state.focused ? 'focused iconfont': 'iconfont'}>
							&#xe614;
						</i>
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

    handleInputFocus() {
		console.log(123)
		this.setState({
			focused: true
		})
	}

	handleInputBlur() {
		console.log(456)
		this.setState({
			focused: false
		})
	}
}

export default Header;
