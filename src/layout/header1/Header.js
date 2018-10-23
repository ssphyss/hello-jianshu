import React from 'react';
import { connect } from 'react-redux';
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
    // constructor(props) {
		// super(props);
		// this.state = {
		// 	focused: false
		// }
		// this.handleInputFocus = this.handleInputFocus.bind(this);
		// this.handleInputBlur = this.handleInputBlur.bind(this);
	// }
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
							in={this.props.focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={this.props.focused ? 'focused': ''}
								onFocus={this.props.handleInputFocus}
								onBlur={this.props.handleInputBlur}
							></NavSearch>
						</CSSTransition>
                        <i className={this.props.focused ? 'focused iconfont': 'iconfont'}>
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
		// this.setState({
		// 	focused: true
		// })
	}

	handleInputBlur() {
		// this.setState({
		// 	focused: false
		// })
	}

}
const mapStateToProps = (state) => {
	return {
		// focused: state.focused
		focused: state.header.focused
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		handleInputFocus() {
			console.log('123')
			const action = {
				type: 'search_focus'
			};
			dispatch(action);
		},
		handleInputBlur() {
			console.log('456')
			const action = {
				type: 'search_blur'
			};
			dispatch(action);
		}
	}
}
// export default Header;
// export default connect( )(Header);
export default connect(mapStateToProps, mapDispathToProps)(Header);