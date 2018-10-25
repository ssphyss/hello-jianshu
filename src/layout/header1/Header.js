import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';

import {
    HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
	Addition,
	Button
} from './style';

class Header extends React.Component{
	getListArea () {
		// const { focused, list } = this.props;
		if(this.props.focused){
			return (
					<SearchInfo>
						<SearchInfoTitle>熱門搜索</SearchInfoTitle>
						<SearchInfoSwitch>	
							<i className="iconfont">&#xe6dd;</i>							
							換一批								
						</SearchInfoSwitch>
						<SearchInfoList>
							{/* <SearchInfoItem>行距杯2018徵文</SearchInfoItem>
							<SearchInfoItem>區塊練</SearchInfoItem>
							<SearchInfoItem>小程序</SearchInfoItem>
							<SearchInfoItem>美食</SearchInfoItem> */}
							{
								this.props.list.map((item)=>{
									return <SearchInfoItem key={item}>{item}</SearchInfoItem>
								})
							}
						</SearchInfoList>
					</SearchInfo>
			)
		} else {
			return null;
		}
	}
    render(){
		// const { focused, handleInputFocus, handleInputBlur } = this.props;
        return(
            <HeaderWrapper>
                <Logo />
                <Nav>
					<NavItem className='left active'>
						<i className="iconfont">&#xe71b;</i>
						首頁
					</NavItem>
					<NavItem className='left'>
						<i className="iconfont">&#xe62a;</i>
						下載App
					</NavItem>
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
						<i className={this.props.focused ? 'focused iconfont': 'iconfont'}> &#xe625;</i>
						{/* { this.getListArea(this.props.focused)} */}
						{ this.getListArea()}
					</SearchWrapper>
				</Nav>
                <Addition>
					<Button className='writting' primary num={'9px'}>
						<i className="iconfont">&#xe728;</i>
						寫文章
					</Button>
					<Button className='reg'>注册</Button>
				</Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
	return {
		// focused: state.focused
		// focused: state.header.focused
		// 改成調用immutable數據
		// focused: state.header.get('focused')

		// 外層的reducer引用了{ combineReducers } from  'redux-immutable';
		// 所以讓state也成為immutable對象,要改成state.get('header')
		// focused: state.get('header').get('focused')
		// 換一個immutable的方法,接收數組,表示取得header下的focused
		focused: state.getIn(['header','focused']),
		list: state.getIn(['header','list'])
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		handleInputFocus() {
			console.log('123')			
			
			// const action = actionCreators.getList();
			// dispatch(action)
			dispatch(actionCreators.searchFocus());
			
			// 異步請求搜尋清單
			// const action = actionCreators.searchFocus();
			// dispatch(action)
			dispatch(actionCreators.getList());
		},
		handleInputBlur() {
			console.log('456')
			dispatch(actionCreators.searchBlur());
		}
	}
}
// export default Header;
export default connect(mapStateToProps, mapDispathToProps)(Header);